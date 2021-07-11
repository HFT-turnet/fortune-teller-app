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
			//dataset.loadData("https://api.fortune-teller.me/v1/calcs/tv_model", '', true, "GET", null, false,'');
			dataset.loadData("http://localhost:3000/v1/calcs/tv_model", '', true, "GET", null, false,'');
			//console.log(dataset);
			this.setModel(dataset);
		},
		
		doSimulation: function () {
			//console.log("Denk, Denk");
			var data=this.getModel();
			//console.log(data);
			data.oData.r=data.oData.r/12;
			//console.log(this.byId("datepickerStart").mProperties.dateValue);//.getproperties("dateValue"));
			//console.log(this.byId("datepickerEnd").mProperties.dateValue.getMonth());
			data.oData.periods=this.byId("datepickerEnd").mProperties.dateValue.getMonth()-this.byId("datepickerStart").mProperties.dateValue.getMonth()+ (12 * (this.byId("datepickerEnd").mProperties.dateValue.getFullYear() - this.byId("datepickerStart").mProperties.dateValue.getFullYear()));
			data.oData.from=this.byId("datepickerStart").mProperties.dateValue.getMonth() +"-"+this.byId("datepickerStart").mProperties.dateValue.getFullYear();
			data.oData.to=this.byId("datepickerEnd").mProperties.dateValue.getMonth() +"-"+this.byId("datepickerEnd").mProperties.dateValue.getFullYear();
			//console.log(data);
			var dataset = new JSONModel();
			var callpath="http://localhost:3000/v1/calcs/tv_get";
			//var params = "bkrid="+bkrid+"&postset="+JSON.stringify(posting.oData);
			var oHeaders = {
							"Content-Type": "application/json"
						};
			//dataset.loadData("http://localhost:3000/v1/calcs/tv_model", params, true, "POST", null, false, oHeaders);
			dataset.loadData(callpath, JSON.stringify(data.oData), true, "POST", null, false, oHeaders);
			console.log (dataset);
			//dataset.loadData("http://localhost:3000/v1/calcs/tv_model", '', true, "POST", null, false,'');
			//console.log(dataset);
			this.setModel(dataset);
		}
    });
});
