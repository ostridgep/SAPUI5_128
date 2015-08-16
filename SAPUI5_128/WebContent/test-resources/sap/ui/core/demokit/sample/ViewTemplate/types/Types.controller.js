/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.controller("sap.ui.core.sample.ViewTemplate.types.Types", {
	onReset: function () {
		var that = this,
			aObjects = this.getView().findAggregatedObjects(true),
			i;

		for (i = 0; i < aObjects.length; i += 1) {
			if (aObjects[i].setValueState) {
				aObjects[i].setValueState(sap.ui.core.ValueState.None);
			}
		}
		this.getView().getModel().resetChanges();
		this.getView().getModel().callFunction("/ResetEdmTypes", {
			method: "POST",
			success: function () {
				sap.m.MessageToast.show("Data successfully reset");
			},
			error: function (oError) {
				that.showError("Error resetting EDM types", oError);
			}
		});
	},

	onSave: function () {
		var that = this;
		this.getView().getModel().submitChanges({
			success: function () {
				sap.m.MessageToast.show("Data successfully saved");
			},
			error: function (oError) {
				that.showError("Error saving EDM types", oError);
			}
		});
	},

	showError: function(sTitle, oError) {
		jQuery.sap.log.error(sTitle + ": " + oError.message, oError.stack,
			"sap.ui.core.sample.ViewTemplate.types.Types");
		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.show(oError.message, {
			icon: sap.m.MessageBox.Icon.ERROR,
			title: sTitle
		});
	}
});