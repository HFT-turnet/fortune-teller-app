sap.ui.define([
	"ft/ui5/ftapp/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.timevalue", {
		onInit: function () {
			// Selectable Accounts
            var oData = {
               newvalue : 100
               }
			var dataset = new JSONModel(oData);
			//console.log(dataset);
			this.setModel(dataset);
		},
		
		doSimulation: function () {
			//console.log("Denk, Denk");
			var data=this.getModel();
			//console.log(data);
		}
    });
});
