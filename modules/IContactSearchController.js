/**
* Public interface for the PersonSearchTemplateController.
* @classpath: addressBook.modules.IContactSearchTemplateController
*/
Aria.interfaceDefinition ({
	$classpath : 'addressBook.modules.IContactSearchController',
	$extends : 'aria.templates.IModuleCtrl',
	$events : {
        "navigate" : {
            description : "Raised navigate event",
            properties : {
                "page" : "Page description."
            }
        }
    },
	$interface : {
		/**
		 * Simple search function called when clicking the search button. 
		 */		
		searchContact : function () {}
	}
});