/**
 * Module controller for facebook user information retrieval
 */
Aria.classDefinition({
	$classpath : 'addressBook.modules.FacebookUser',
	$extends : 'addressBook.modules.Facebook',
	$constructor : function () {
		this.$Facebook.constructor.call(this);
	},
	$destructor : function () {
		this.$Facebook.$destructor.call(this);
	},	
	$prototype : {
		
		_buildRequest : function (value) {
			return "/" + value + "?fields=picture,name,link";
		}
		
	}
});