/*
 * Product selectSet v1.0.1
 * Copyright 2020, ys kim
 * Licensed under MIT
 * Released on: April 01, 2020
 */

/*===========================
selectSet
===========================*/
$(document).on("click", ".form-select-after .p-holder", function() {
	if ($(this).parent().hasClass("on")) {
		$(this).parent().removeClass("on");
	} else {
		$(this).parent().addClass("on");
	}
});

$(document).on("click", ".form-select-after .p-option", function() {
	var optionTxt = $(this).html();
	var optionVal = $(this).data("value");
	var target = $(this).parent().data("target");
	$(target).val(optionVal);
	$(this).parent().removeClass("on");
	$(this).parent().find(".p-holder").html(optionTxt).addClass("on");
});

var selectSetProcess = function(target) {
	var optionTxt = $(this).html();
	var optionVal = $(this).data("value");
	var target = $(this).parent().data("target");
	$(target).val(optionVal);
	$(this).parent().removeClass("on");
	$(this).parent().find(".p-holder").html(optionTxt).addClass("on");
};

var selectSet = function(target) {
	var setTxt = "";
	var optionCount = 0;
	$(target + " option").each(function() {
		var targetText = $(this).text();
		var targetVal = $(this).val();
		var selected = null;
		if (optionCount == 0)	{
			setTxt += "<li class='p-holder'>" + targetText + "</li>";
			setTxt += "<li class='p-holder-txt'>" + targetText + "</li>";
		} else {
			setTxt += "<li class='p-option' data-value='" + targetVal + "'>" + targetText + "</li>";
		}
		optionCount++;			
	});
	setTxt = "<ul class='form-select-after' data-target='" + target + "'>" + setTxt + "</ul>";
	$(target).hide();
	$(target).after(setTxt);

};



