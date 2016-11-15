$(function(){

	// Do jQuery or Zepto magic here

	/*
     * Layout-Höhe vergrössern wenn es viele aktuelle Angebote gibt
     * (keine allzu elegante Lösung ...)
     */
	$("div:first-child").css("minHeight", $("aside").height()+400+"px");

});