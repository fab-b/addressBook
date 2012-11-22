Aria.tplScriptDefinition({
    $classpath : "addressBook.templates.MainLayoutScript",
    $prototype : {
        $displayReady : function () {
            var splashScreenDiv = aria.utils.Dom.getElementById("splashScreenContainer");
            if (splashScreenDiv) {
                window.setTimeout(function () {
                    splashScreenDiv.style.opacity = 0;
                }, 0);
                if (window.console) {}
                window.setTimeout(function () {

                    document.body.style.overflow = "visible";
                    if (splashScreenDiv.parentNode) {
                        document.body.removeChild(splashScreenDiv);
                    }
                    splashScreenDiv = null;
                }, 400);
            }

        }

    }
});