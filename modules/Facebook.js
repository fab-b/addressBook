/**
 * Module controller for facebook information retrieval
 */
Aria.classDefinition({
	$classpath : 'addressBook.modules.Facebook',
	$extends : 'aria.templates.ModuleCtrl',
	$implements : ['addressBook.modules.IFacebook'],	
	$dependencies : ["aria.utils.ScriptLoader"],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._profileChangeListener = {
			fn : this._onProfileChange,
			scope : this
		};		
	},
	$destructor : function () {
		this._profileChangeListener = null;
		this.$ModuleCtrl.$destructor.call(this);
	},	
	$prototype : {
		$publicInterfaceName : "addressBook.modules.IFacebook",	
		
		init : function (args, cb) {
			this._data.profile = null;
			this.json.addListener(this._data, "profile", );
			
			aria.utils.ScriptLoader.load(["//connect.facebook.net/en_US/all.js"], {
				fn : this._onFBReady,
				scope : this,
				args : cb,
				resIndex : -1
			});
		},
		
		_onFBReady : function (cb) {
			this.$callback(cb);
		},
		
		_onProfileChange : function (change) {
			this._fbRequest("/" + change.newValue, {
				fn : this._onFBResponse,
				scope : this
			});
		},
		
		
		_fbRequest : function (graphId, cb) {
			var that = this;
			FB.api(graphId, function (response) {
				that.$callback(cb, response);
			});
		},
		
		_onFBResponse : function (res) {
			debugger
		}
		
	}
});