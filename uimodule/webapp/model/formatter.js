sap.ui.define([], function () {
    "use strict";
    return {
	    inflationtotext: function (inflation) {
			inflation=inflation*100;
			if (isNaN(inflation)) {
				return "gen. Inflation";
			} else {
  			  	return  parseFloat(inflation).toFixed(2) + "% Inflation";
			};
    	},
    	stringtofloat: function (value) {
    		return parseFloat(value);
	    },
	    topercent: function (value) {
			//return NumberFormat.getPercentInstance().format(value);
	    	return  value + "%";
    	}
	};
});
