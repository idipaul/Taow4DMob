
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var container4 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	container4.click = function container4_click (event)// @startlock
	{// @endlock
		$$('tabView1').selectTab(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("container4", "click", container4.click, "WAF");
// @endregion
};// @endlock
