sap.ui.define([
	"ft/ui5/ftapp/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.TimeValue", {
		onInit: function () {
			// Demo Data
            //var oData = {
            //   newvalue : 100
            //   }
			
			var dataset = new JSONModel();
			var callpath=ftapipath + "calcs/tv_model"
			dataset.loadData(callpath, '', true, "GET", null, false,'');
			var that = this;			
			dataset.attachRequestCompleted(function() {that.setdates();});
			//dataset.Odata.from=
			//console.log (this.monthyearset(new Date(Date.now())));
			//console.log(dataset);
			this.setModel(dataset);
		},
		setdates: function(){
			var dataset=this.getModel();
			console.log(dataset.oData.from);
			if (dataset.oData.from==null) {
					dataset.oData.from=this.monthyearset(new Date(Date.now()));
					this.byId("datepickerStart").mProperties.dateValue=new Date(Date.now());
					this.byId("datepickerStart").setValue(dataset.oData.from);
				}
			console.log(dataset.oData.from);
			console.log(this.byId("datepickerStart"));
			//this.byId("datepickerStart").value=dataset.oData.from;
			dataset.refresh();
		},
		
		doSimulation: function () {
			var data=this.getModel();
			data.oData.r=data.oData.r/12;
			//console.log(this.byId("datepickerStart").mProperties.dateValue);//.getproperties("dateValue"));
			//console.log(this.byId("datepickerEnd").mProperties.dateValue.getMonth());
			data.oData.periods=this.byId("datepickerEnd").mProperties.dateValue.getMonth()-this.byId("datepickerStart").mProperties.dateValue.getMonth()+ (12 * (this.byId("datepickerEnd").mProperties.dateValue.getFullYear() - this.byId("datepickerStart").mProperties.dateValue.getFullYear()));
			data.oData.from=this.monthyearset(this.byId("datepickerStart").mProperties.dateValue);
			data.oData.to=this.monthyearset(this.byId("datepickerEnd").mProperties.dateValue);
			var dataset = new JSONModel();
			var callpath=ftapipath + "calcs/tv_get";
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
		},
		monthyearset: function(date) {
			var date=new Date(date);
			var retour=date.getMonth()+1 +"-"+date.getFullYear();
			return retour;
		}
    });
});
