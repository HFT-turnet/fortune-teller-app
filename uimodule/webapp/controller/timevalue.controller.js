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
			//var oHeaders = {
			//			    "Origin": "https://api.fortune-teller.me"
			//			};
			dataset.loadData("https://api.fortune-teller.me/v1/calcs/tv_model", '', true, "GET", null, false,'');
			
			console.log(dataset);
			this.setModel(dataset);
		},
		
		doSimulation: function () {
			//console.log("Denk, Denk");
			var data=this.getModel();
			//console.log(data);
		}
    });
});
