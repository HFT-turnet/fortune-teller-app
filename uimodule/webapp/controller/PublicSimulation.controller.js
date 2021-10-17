sap.ui.define([
		"ft/ui5/ftapp/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast",
		"ft/ui5/ftapp/model/formatter"
	], function (Controller, JSONModel, MessageToast, formatter) {
    "use strict";

    return Controller.extend("ft.ui5.ftapp.controller.PublicSimulation", {
		formatter: formatter,
		onInit: function () {	
			// to show errors from field management
			sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
					
			var envelope = new JSONModel();
			var callpath=ftapipath + "public/summary_report"
			envelope.loadData(callpath, '', true, "GET", null, false,'');
			this.setModel(envelope);
			var that=this;
						
			//envelope.attachRequestCompleted(function() {
			//	var envelope=that.getModel();
			//	console.log(envelope.oData);
			//});
			
			//console.log(envelope);
			
			var results = new JSONModel();
			this.setModel(results, "results");
			
			var messages = new JSONModel();
			this.setModel(messages, "messages");
			
		},
		
		onCollapseAll: function() {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},
		onExpandAll: function() {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(1);
		},
		
		onChangetab: function() {
			// At change of tab, the info-message in footer is reloaded
			var oTab = this.byId("idTabbar");
			var messages = this.getModel("messages");
			var envelope = this.getModel();
			
			if (oTab.getProperty("selectedKey")=="intro"){
				messages.oData.info="";
			};			
			if (oTab.getProperty("selectedKey")=="expense"){
				messages.oData.info="Source-Info: " + envelope.oData.expenses.source;
			};			
			if (oTab.getProperty("selectedKey")=="income"){
				messages.oData.info="Source-Info: " + envelope.oData.incomes.source;
			};
			if (oTab.getProperty("selectedKey")=="summary"){
				// Check infos from simulation
				var results=this.byId("summary").getModel("results");
				// if defined?
				messages.oData.info="Simulation Information: " + results.oData.environment.info;
				// Messagetoast for Disclaimer
				if (results.oData.environment.disclaimer != "") {
					MessageToast.show(results.oData.environment.disclaimer);
				};
			};
			messages.refresh();
		},
		onUpdate: function() {
			// get envelope
			var envelope=this.getModel();
			
			// update key data in subsets from environment
			envelope.oData.expenses.t=envelope.oData.environment.from
			envelope.oData.incomes.t=envelope.oData.environment.from
			envelope.oData.expenses.i=envelope.oData.environment.i
			envelope.oData.incomes.i=envelope.oData.environment.i
			
			// Load results
			var results = this.byId("summary").getModel("results");
			//console.log(results);
			var callpath=ftapipath + "public/summary_report"
			var oHeaders = {
							"Content-Type": "application/json"
						};
						
			results.loadData(callpath, envelope.getJSON(), true, "POST", null, false, oHeaders);
		}
    });
});
