sap.ui.define([
	"ft/ui5/ftapp/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.Debt", {
		onInit: function () {
			// Demo Data
            //var oData = {
            //   newvalue : 100
            //   }
			
			var dataset = new JSONModel();
			var callpath=ftapipath + "calcs/tv_model"
			//dataset.loadData(callpath, '', true, "GET", null, false,'');
			//var that = this;			
			//dataset.attachRequestCompleted(function() {that.setdates();});
			//dataset.Odata.from=
			//console.log (this.monthyearset(new Date(Date.now())));
			//console.log(dataset);
			//this.setModel(dataset);
		}
    });
});
