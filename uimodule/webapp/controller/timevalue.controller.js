sap.ui.define([
	"ft/ui5/ftapp/controller/BaseController",
	"sap/ui/core/routing/History"
	], function (Controller, History) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.timevalue", {
		onNavBack: function () {
					var oHistory = History.getInstance();
					var sPreviousHash = oHistory.getPreviousHash();

					if (sPreviousHash !== undefined) {
						window.history.go(-1);
					} else {
						var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
						oRouter.navTo("RouteMainView");
					}
				}
    });
});
