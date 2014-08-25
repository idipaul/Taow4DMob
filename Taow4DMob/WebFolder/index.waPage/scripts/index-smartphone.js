
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var container4 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var rais = $$('textField1').getValue();
		sources.societe.callMethod({method: "getIDsociete", onSuccess:function(e){
			sources.societe.setEntityCollection(e.result);
		}},rais);

     var idsociete = $$('textField2').getValue();
		sources.contact.callMethod({method: "getnamecontact", onSuccess:function(e){
			sources.contact.setEntityCollection(e.result);
		}},idsociete);
		
	};// @lock

	container4.click = function container4_click (event)// @startlock
	{// @endlock
		$$('tabView1').selectTab(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("container4", "click", container4.click, "WAF");
// @endregion
};// @endlock
