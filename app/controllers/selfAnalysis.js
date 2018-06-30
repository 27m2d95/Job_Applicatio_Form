var selfAnalysisParams = {
	Hardworking : '',
	Discipline : '',
	WorkInStess : '',
	WorkInGroup : '',
	WorkInShift : '',
	Punctual : '',
	Travel : '',
	Confidence : '',
	Presenation : '',
	Resposible : '',
	Multitasking : '',
	Loyal : '',
	FollowTheRules : '',
	TakingBribe : '',
	Firm : '',
};

var myArray = ['Very Poor', 'Poor', 'Adequate', 'Good', 'Very Good'];

var opts = {
	cancel : 5,
	options : myArray,
	destructive : 0,
};

var dialog;
function s1Picker() {
	$.s1.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s1.value = myArray[selectedIndex];
	});

}

function s2Picker() {
	$.s2.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s2.value = myArray[selectedIndex];
	});

}

function s3Picker() {
	$.s3.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s3.value = myArray[selectedIndex];
	});

}

function s4Picker() {
	$.s4.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s4.value = myArray[selectedIndex];
	});

}

function s5Picker() {
	$.s5.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s5.value = myArray[selectedIndex];
	});

}

function s6Picker() {
	$.s6.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s6.value = myArray[selectedIndex];
	});

}

function s7Picker() {
	$.s7.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s7.value = myArray[selectedIndex];
	});

}

function s8Picker() {
	$.s8.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s8.value = myArray[selectedIndex];
	});

}

function s9Picker() {
	$.s9.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s9.value = myArray[selectedIndex];
	});

}

function s10Picker() {
	$.s10.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s10.value = myArray[selectedIndex];
	});

}

function s11Picker() {
	$.s11.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s11.value = myArray[selectedIndex];
	});

}

function s12Picker() {
	$.s12.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s12.value = myArray[selectedIndex];
	});

}

function s13Picker() {
	$.s13.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s13.value = myArray[selectedIndex];
	});

}

function s14Picker() {
	$.s14.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s14.value = myArray[selectedIndex];
	});

}

function s15Picker() {
	$.s15.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.s15.value = myArray[selectedIndex];
	});

}

function blr(e) {
	$.s1.blur();
	$.s2.blur();
	$.s3.blur();
	$.s4.blur();
	$.s5.blur();
	$.s6.blur();
	$.s7.blur();
	$.s8.blur();
	$.s9.blur();
	$.s10.blur();
	$.s11.blur();
	$.s12.blur();
	$.s13.blur();
	$.s14.blur();
	$.s15.blur();
}

function goTo(e) {
	if ($.s1.value == '' && $.s1.required == 1) {
		alert("Question 1 is Required");
		$.s1.focus();
		$.s1.setBorderColor('red');
		$.s1.setBorderWidth(3);
	} else if ($.s2.value == '' && $.s2.required == 1) {
		alert("Question 2 is Required");
		$.s2.focus();
		$.s2.setBorderColor('red');
		$.s2.setBorderWidth(3);
	} else if ($.s3.value == '' && $.s3.required == 1) {
		alert("Question 3 is Required");
		$.s3.focus();
		$.s3.setBorderColor('red');
		$.s3.setBorderWidth(3);
	} else if ($.s4.value == '' && $.s4.required == 1) {
		alert("Question 4 is Required");
		$.s4.focus();
		$.s4.setBorderColor('red');
		$.s4.setBorderWidth(3);
	} else if ($.s5.value == '' && $.s5.required == 1) {
		alert("Question 5 is Required");
		$.s5.focus();
		$.s5.setBorderColor('red');
		$.s5.setBorderWidth(3);
	} else if ($.s6.value == '' && $.s6.required == 1) {
		alert("Question 6 is Required");
		$.s6.focus();
		$.s6.setBorderColor('red');
		$.s6.setBorderWidth(3);
	} else if ($.s7.value == '' && $.s7.required == 1) {
		alert("Question 7 is Required");
		$.s7.focus();
		$.s7.setBorderColor('red');
		$.s7.setBorderWidth(3);
	} else if ($.s8.value == '' && $.s8.required == 1) {
		alert("Question 8 is Required");
		$.s8.focus();
		$.s8.setBorderColor('red');
		$.s8.setBorderWidth(3);
	} else if ($.s9.value == '' && $.s9.required == 1) {
		alert("Question 9 is Required");
		$.s9.focus();
		$.s9.setBorderColor('red');
		$.s9.setBorderWidth(3);
	} else if ($.s10.value == '' && $.s10.required == 1) {
		alert("Question 10 is Required");
		$.s10.focus();
		$.s10.setBorderColor('red');
		$.s10.setBorderWidth(3);
	} else if ($.s11.value == '' && $.s11.required == 1) {
		alert("Question 11 is Required");
		$.s11.focus();
		$.s11.setBorderColor('red');
		$.s11.setBorderWidth(3);
	} else if ($.s12.value == '' && $.s12.required == 1) {
		alert("Question 12 is Required");
		$.s12.focus();
		$.s12.setBorderColor('red');
		$.s12.setBorderWidth(3);
	} else if ($.s13.value == '' && $.s13.required == 1) {
		alert("Question 13 is Required");
		$.s13.focus();
		$.s13.setBorderColor('red');
		$.s13.setBorderWidth(3);
	} else if ($.s14.value == '' && $.s14.required == 1) {
		alert("Question 14 is Required");
		$.s14.focus();
		$.s14.setBorderColor('red');
		$.s14.setBorderWidth(3);
	} else if ($.s15.value == '' && $.s15.required == 1) {
		alert("Question 15 is Required");
		$.s15.focus();
		$.s15.setBorderColor('red');
		$.s15.setBorderWidth(3);
	} else {

		selfAnalysisParams = {
			Hardworking : $.s1.value,
			Discipline : $.s2.value,
			WorkInStess : $.s3.value,
			WorkInGroup : $.s4.value,
			WorkInShift : $.s5.value,
			Punctual : $.s6.value,
			Travel : $.s7.value,
			Confidence : $.s8.value,
			Presenation : $.s9.value,
			Resposible : $.s10.value,
			Multitasking : $.s11.value,
			Loyal : $.s12.value,
			FollowTheRules : $.s13.value,
			TakingBribe : $.s14.value,
			Firm : $.s15.value,
		};

		console.log(selfAnalysisParams);

		Alloy.createController('healthDeclaration').getView().open();

		//call APi

	}
}

$.selfAnalysis.open();
