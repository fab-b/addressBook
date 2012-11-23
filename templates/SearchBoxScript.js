Aria.tplScriptDefinition({
    $classpath : "addressBook.templates.SearchBoxScript",
    $constructor : function () {
        this.textValue = "";
    },
    $prototype : {

        navigateEnter : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // ENTER
                this.moduleCtrl.searchContact();
            } 
        },

        searchClicked : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // CLICK
                this.moduleCtrl.searchContact();
            }
        },

       textTyped : function (value) {
            if (value != this.textValue) {
                this.textValue = value;
                this.$json.setValue(this.data, "query", this.textValue);    
            }
        },
    }
});