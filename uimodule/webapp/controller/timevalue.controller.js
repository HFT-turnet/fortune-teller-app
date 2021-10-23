sap.ui.define([
	"ft/ui5/ftapp/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.TimeValue", {
		onInit: function () {
			sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
			var datanow = new JSONModel();
			var callpath=ftapipath + "public/timeslice?type=single"
			datanow.loadData(callpath, '', true, "GET", null, false,'');
			this.setModel(datanow);
			//console.log(datanow);
			var cashvaluethen = new JSONModel();
			//datathen.oData.t=0
			this.setModel(cashvaluethen, "cashvaluethen");
			var costvaluethen = new JSONModel();
			this.setModel(costvaluethen, "costvaluethen");
			datanow.attachRequestCompleted(function() {
				datanow.oData.i=datanow.oData.i*100;
				datanow.refresh();
				cashvaluethen.oData.t=datanow.oData.t+10;
				cashvaluethen.refresh();
			});
		},
		
		doSimulation: function () {
			var datanow=this.getModel();
			var cashvaluethen=this.getModel("cashvaluethen");
			datanow.oData.i=-1*datanow.oData.i/100;
			var callpath=ftapipath + "public/timeslice?targetyear="+cashvaluethen.oData.t;
			var oHeaders = {
							"Content-Type": "application/json"
						};
			cashvaluethen.loadData(callpath, JSON.stringify(datanow.oData), true, "POST", null, false, oHeaders);
			
			var costvaluethen=this.getModel("costvaluethen");
			datanow.oData.i=-1*datanow.oData.i;
			costvaluethen.loadData(callpath, JSON.stringify(datanow.oData), true, "POST", null, false, oHeaders);
			datanow.oData.i=datanow.oData.i*100;
			//console.log (datathen);
		}
    });
});
