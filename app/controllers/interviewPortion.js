var intenrviewPortionParams = {
	selfImpression : '',
	selfMotivition : '',
	teamWork : '',
	knowladge : '',
	skill : '',
	meetExpect : '',
};

var myArray = ['Good', 'Fair', 'Poor', 'Other'];
var opts = {
	cancel : 4,
	options : myArray,
	destructive : 0,
};
var dialog;

function selfImpressionPicker() {
	$.selfImpression.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;

		if (myArray[selectedIndex] == myArray[3]) {
			var textfield = Ti.UI.createTextField({
				hintText : 'Enter Your Comment',
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			});

			var dialog = Ti.UI.createAlertDialog({
				title : 'Please State',
				buttonNames : ['OK', 'Cancel'],
				ok : 0,
				androidView : textfield,
			});
			dialog.addEventListener('click', function(e) {
				if (e.index === e.source.ok) {
					$.selfImpression.value = textfield.value;
				}
			});
			dialog.show();

		} else {
			$.selfImpression.value = myArray[selectedIndex];
		}

	});
}

function selfMotivitionPicker() {
	$.selfMotivition.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;

		if (myArray[selectedIndex] == myArray[3]) {
			var textfield = Ti.UI.createTextField({
				hintText : 'Enter Your Comment',
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			});

			var dialog = Ti.UI.createAlertDialog({
				title : 'Please State',
				buttonNames : ['OK', 'Cancel'],
				ok : 0,
				androidView : textfield,
			});
			dialog.addEventListener('click', function(e) {
				if (e.index === e.source.ok) {
					$.selfMotivition.value = textfield.value;
				}
			});
			dialog.show();

		} else {
			$.selfMotivition.value = myArray[selectedIndex];
		}

	});
}

function teamWorkPicker() {
	$.teamWork.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;

		if (myArray[selectedIndex] == myArray[3]) {
			var textfield = Ti.UI.createTextField({
				hintText : 'Enter Your Comment',
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			});

			var dialog = Ti.UI.createAlertDialog({
				title : 'Please State',
				buttonNames : ['OK', 'Cancel'],
				ok : 0,
				androidView : textfield,
			});
			dialog.addEventListener('click', function(e) {
				if (e.index === e.source.ok) {
					$.teamWork.value = textfield.value;
				}
			});
			dialog.show();

		} else {
			$.teamWork.value = myArray[selectedIndex];
		}

	});
}

function knowladgePicker() {
	$.knowladge.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;

		if (myArray[selectedIndex] == myArray[3]) {
			var textfield = Ti.UI.createTextField({
				hintText : 'Enter Your Comment',
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			});

			var dialog = Ti.UI.createAlertDialog({
				title : 'Please State',
				buttonNames : ['OK', 'Cancel'],
				ok : 0,
				androidView : textfield,
			});
			dialog.addEventListener('click', function(e) {
				if (e.index === e.source.ok) {
					$.knowladge.value = textfield.value;
				}
			});
			dialog.show();

		} else {
			$.knowladge.value = myArray[selectedIndex];
		}

	});
}

function skillPicker() {
	$.skill.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;

		if (myArray[selectedIndex] == myArray[3]) {
			var textfield = Ti.UI.createTextField({
				hintText : 'Enter Your Comment',
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			});

			var dialog = Ti.UI.createAlertDialog({
				title : 'Please State',
				buttonNames : ['OK', 'Cancel'],
				ok : 0,
				androidView : textfield,
			});
			dialog.addEventListener('click', function(e) {
				if (e.index === e.source.ok) {
					$.skill.value = textfield.value;
				}
			});
			dialog.show();

		} else {
			$.skill.value = myArray[selectedIndex];
		}

	});
}

function meetExpectPicker() {
	$.meetExpect.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;

		if (myArray[selectedIndex] == myArray[3]) {
			var textfield = Ti.UI.createTextField({
				hintText : 'Enter Your Comment',
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			});

			var dialog = Ti.UI.createAlertDialog({
				title : 'Please State',
				buttonNames : ['OK', 'Cancel'],
				ok : 0,
				androidView : textfield,
			});
			dialog.addEventListener('click', function(e) {
				if (e.index === e.source.ok) {
					$.meetExpect.value = textfield.value;
				}
			});
			dialog.show();

		} else {
			$.meetExpect.value = myArray[selectedIndex];
		}

	});
}

function blr(e) {
	$.selfImpression.blur();
	$.selfMotivition.blur();
	$.teamWork.blur();
	$.knowladge.blur();
	$.skill.blur();
	$.meetExpect.blur();
}

function goTo(e) {
	if ($.selfImpression.value == '' && $.selfImpression.required == 1) {
		alert("Self Impression is Required");
		$.selfImpression.focus();
		$.selfImpression.setBorderColor('red');
		$.selfImpression.setBorderWidth(1);
		
	} else if ($.selfMotivition.value == '' && $.selfMotivition.required == 1) {
		alert("Self Motivition is Required");
		$.selfMotivition.focus();
		$.selfMotivition.setBorderColor('red');
		$.selfMotivition.setBorderWidth(1);
		
	} else if ($.teamWork.value == '' && $.teamWork.required == 1) {
		alert("Team Work is Required");
		$.teamWork.focus();
		$.teamWork.setBorderColor('red');
		$.teamWork.setBorderWidth(1);
		
	} else if ($.knowladge.value == '' && $.knowladge.required == 1) {
		alert("Knowladge is Required");
		$.knowladge.focus();
		$.knowladge.setBorderColor('red');
		$.knowladge.setBorderWidth(1);
		
	} else if ($.skill.value == '' && $.skill.required == 1) {
		alert("Skill is Required");
		$.skill.focus();
		$.skill.setBorderColor('red');
		$.skill.setBorderWidth(1);
		
	} else if ($.meetExpect.value == '' && $.meetExpect.required == 1) {
		alert("Meeting the Job Expectation is Required");
		$.meetExpect.focus();
		$.meetExpect.setBorderColor('red');
		$.meetExpect.setBorderWidth(1);
		
	} else {

		 intenrviewPortionParams = {
			selfImpression : $.selfImpression.value,
			selfMotivition : $.selfMotivition.value,
			teamWork : $.teamWork.value,
			knowladge : $.knowladge.value,
			skill :$.skill.value,
			meetExpect : $.meetExpect.value,
		};
		
		console.log(intenrviewPortionParams);
		
		Alloy.createController('hrUse').getView().open();

	}
}

$.interviewPortion.open();
