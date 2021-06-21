sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("ft.ui5.ftapp.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "ft.ui5.ftapp",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
