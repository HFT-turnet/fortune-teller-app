sap.ui.define([
		"ft/ui5/ftapp/controller/BaseController",
		"sap/m/MessageToast"
	], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.MainView", {
		
		handleTilePress : function (evt) {
			// Get Target Frame
			var module = evt.getSource().getUrl();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(module);
		},
		
		callFTsite : function (evt) {
			// Get Target Frame
			window.open("https://fortune-teller.me","_self")
		},
		
		notimplemented : function (evt) {
			// Show message Toast
			var msg = 'Functionality not implemented yet.';
			MessageToast.show(msg);
		},
		
		testpress : function () {
			var test=this.getOwnerComponent().getManifestEntry("/sap.ui5/config/apipath");
			console.log(test);
		}
    });
});
