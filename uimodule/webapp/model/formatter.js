sap.ui.define([], function () {
    "use strict";
    return {
    	stringtofloat: function (value) {
    		return parseFloat(value);
	    },
	    topercent: function (value) {
			//return NumberFormat.getPercentInstance().format(value);
	    	return  value + "%";
    	}
	};
});
