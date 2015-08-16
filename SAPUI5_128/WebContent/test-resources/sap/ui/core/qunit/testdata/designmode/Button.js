/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control example.designmode.Button.
sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control'],
	function(jQuery, Control) {
	"use strict";

	var Button = Control.extend("example.designmode.Button", {
		
		metadata: {
			
			designTime: true
			
		}
		
	});

	return Button;

}, /* bExport= */ true);
