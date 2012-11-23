Aria.tplScriptDefinition({
    $classpath : "addressBook.templates.ResultsBoxScript",
    $prototype : {

        newSearchClicked : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // CLICK
                this.moduleCtrl.newSearch();
            }
        }
    }
});