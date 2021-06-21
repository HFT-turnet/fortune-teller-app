/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["ft/ui5/ftapp/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
