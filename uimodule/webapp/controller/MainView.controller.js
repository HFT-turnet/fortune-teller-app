sap.ui.define(["ft/ui5/ftapp/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.MainView", {
		
		handleTilePress : function (evt) {
			// Get Target Frame
			var module = evt.getSource().getUrl();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(module);
		}
    });
});
