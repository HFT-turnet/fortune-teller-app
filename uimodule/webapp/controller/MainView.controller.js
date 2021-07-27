sap.ui.define(["ft/ui5/ftapp/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.MainView", {
		
		handleTilePress : function (evt) {
			// Get Target Frame
			var module = evt.getSource().getUrl();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//console.log(module);
			oRouter.navTo(module);
		},
		testpress : function () {
			var test=this.getOwnerComponent().getManifestEntry("/sap.ui5/config/apipath");
			console.log(test);
		}
    });
});
