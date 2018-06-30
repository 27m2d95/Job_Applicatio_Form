var generalQueationParams = {
	Q1 : '',
	Q2 : '',
	Q3 : '',
	Q4 : '',
	Q5 : '',
	Q6 : '',
	Q7 : '',
	Q8 : '',
	Q9 : '',
};

var myArray = ['Yes', 'No'];

var opts = {
	cancel : 2,
	options : myArray,
	destructive : 0,
};

var dialog;
function q1Picker() {
	$.q1.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q1.value = myArray[selectedIndex];
	});

}

function q2Picker() {
	$.q2.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q2.value = myArray[selectedIndex];
	});

}

function q3Picker() {
	$.q3.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q3.value = myArray[selectedIndex];
	});

}

function q4Picker() {
	$.q4.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q4.value = myArray[selectedIndex];
	});

}

function q5Picker() {
	$.q5.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q5.value = myArray[selectedIndex];
	});

}

function q6Picker() {
	$.q6.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q6.value = myArray[selectedIndex];
	});

}

function q7Picker() {
	$.q7.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q7.value = myArray[selectedIndex];
	});

}

function q8Picker() {
	$.q8.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q8.value = myArray[selectedIndex];
	});

}

function q9Picker() {
	$.q9.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.q9.value = myArray[selectedIndex];
	});

}

function blr(e) {
	$.q1.blur();
	$.q2.blur();
	$.q3.blur();
	$.q4.blur();
	$.q5.blur();
	$.q6.blur();
	$.q7.blur();
	$.q8.blur();
	$.q9.blur();
}

function goTo(e) {
	if ($.q1.value == '' && $.q1.required == 1) {
		alert("Question 1 is Required");
		$.q1.focus();
		$.q1.setBorderColor('red');
		$.q1.setBorderWidth(3);
	} else if ($.q2.value == '' && $.q2.required == 1) {
		alert("Question 2 is Required");
		$.q2.focus();
		$.q2.setBorderColor('red');
		$.q2.setBorderWidth(3);
	} else if ($.q3.value == '' && $.q3.required == 1) {
		alert("Question 3 is Required");
		$.q3.focus();
		$.q3.setBorderColor('red');
		$.q3.setBorderWidth(3);
	} else if ($.q4.value == '' && $.q4.required == 1) {
		alert("Question 4 is Required");
		$.q4.focus();
		$.q4.setBorderColor('red');
		$.q4.setBorderWidth(3);
	} else if ($.q5.value == '' && $.q5.required == 1) {
		alert("Question 5 is Required");
		$.q5.focus();
		$.q5.setBorderColor('red');
		$.q5.setBorderWidth(3);
	} else if ($.q6.value == '' && $.q6.required == 1) {
		alert("Question 6 is Required");
		$.q6.focus();
		$.q6.setBorderColor('red');
		$.q6.setBorderWidth(3);
	} else if ($.q7.value == '' && $.q7.required == 1) {
		alert("Question 7 is Required");
		$.q7.focus();
		$.q7.setBorderColor('red');
		$.q7.setBorderWidth(3);
	} else if ($.q8.value == '' && $.q8.required == 1) {
		alert("Question 8 is Required");
		$.q8.focus();
		$.q8.setBorderColor('red');
		$.q8.setBorderWidth(3);
	} else if ($.q9.value == '' && $.q9.required == 1) {
		alert("Question 9 is Required");
		$.q9.focus();
		$.q9.setBorderColor('red');
		$.q9.setBorderWidth(3);
	} else {
		generalQueationParams = {
			Q1 : $.q1.value,
			Q2 : $.q2.value,
			Q3 : $.q3.value,
			Q4 : $.q4.value,
			Q5 : $.q5.value,
			Q6 : $.q6.value,
			Q7 : $.q7.value,
			Q8 : $.q8.value,
			Q9 : $.q9.value,
		};

		console.log(generalQueationParams);

		Alloy.createController('selfAnalysis').getView().open();

		//call APi

	}
}

$.generalInfo.open();
