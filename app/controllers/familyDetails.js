var familyDetailsParams = {
	fatherName : '',
	fatherOccupation : '',
	fatherEmployer : '',
	motherName : '',
	motherOccupation : '',
	motherEmploy : '',
	spouseName : '',
	spouseOccupation : '',
	spouseContactNum : '',
	spouseEmployer : '',
};

var myArray = ['Yes', 'No'];

var opts = {
	cancel : 2,
	options : myArray,
	//selectedIndex : 0,
	destructive : 0,
};

var dialog;
function fatherEmployerPicker() {
	$.fEmployer.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.fEmployer.value = myArray[selectedIndex];
	});
}

function motherEmployerPicker() {
	$.mEmployer.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.mEmployer.value = myArray[selectedIndex];
	});
}

function spouseEmployerPicker() {
	$.sEmployer.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.sEmployer.value = myArray[selectedIndex];
	});
}

function blr(e) {
	$.fEmployer.blur();
	$.mEmployer.blur();
	$.sEmployer.blur();
}

function goToChildrenAndSiblings(e) {
	if ($.fatherName.value == '' && $.fatherName.required == 1) {
		alert($.fatherName.getHintText() + " is Required");
		$.fatherName.focus();
		$.fatherName.setBorderColor('red');
		$.fatherName.setBorderWidth(1);
	} else if ($.fatherOccupation.value == '' && $.fatherOccupation.required == 1) {
		alert($.fatherOccupation.getHintText() + " is Required");
		$.fatherOccupation.focus();
		$.fatherOccupation.setBorderColor('red');
		$.fatherOccupation.setBorderWidth(1);
	} else if ($.fEmployer.value == '' && $.fEmployer.required == 1) {
		alert($.fEmployer.getHintText() + " is Required");
		$.fEmployer.focus();
		$.fEmployer.setBorderColor('red');
		$.fEmployer.setBorderWidth(1);
	} else if ($.motherName.value == '' && $.motherOccupation.required == 1) {
		alert($.motherName.getHintText() + " is Required");
		$.motherName.focus();
		$.motherName.setBorderColor('red');
		$.motherName.setBorderWidth(1);
	} else if ($.motherOccupation.value == '' && $.motherOccupation.required == 1) {
		alert($.motherOccupation.getHintText() + " is Required");
		$.motherOccupation.focus();
		$.motherOccupation.setBorderColor('red');
		$.motherOccupation.setBorderWidth(1);
	} else if ($.mEmployer.value == '' && $.mEmployer.required == 1) {
		alert($.mEmployer.getHintText() + " is required");
		$.mEmployer.focus();
		$.mEmployer.setBorderColor('red');
		$.mEmployer.setBorderWidth(1);
	} else if ($.childrenNum.value == '' && $.childrenNum.required == 1) {
		alert($.childrenNum.getHintText() + " is required");
		$.childrenNum.focus();
		$.childrenNum.setBorderColor('red');
		$.childrenNum.setBorderWidth(1);
	} else if ($.siblingNum.value == '' && $.siblingNum.required == 1) {
		alert($.siblingNum.getHintText() + " is required");
		$.siblingNum.focus();
		$.siblingNum.setBorderColor('red');
		$.siblingNum.setBorderWidth(1);
	} else {
		familyDetailsParams.fatherName = $.fatherName.value;
		familyDetailsParams.fatherOccupation = $.fatherOccupation.value;
		familyDetailsParams.fatherEmployer = $.fEmployer.value;
		familyDetailsParams.motherName = $.motherName.value;
		familyDetailsParams.motherOccupation = $.motherOccupation.value;
		familyDetailsParams.motherEmployer = $.mEmployer.value;
		familyDetailsParams.spouseName = $.spouseName.value;
		familyDetailsParams.spouseOccupation = $.spouseOccupation.value;
		familyDetailsParams.spouseContactNum = $.spouseContactNum.value;
		familyDetailsParams.spouseEmployer = $.sEmployer.value;

		//console.log(familyDetailsParams);
		//call APi

		var num1 = $.siblingNum.value;
		var num2 = $.childrenNum.value;

		if (num1 == 0 && num2 == 0) {
			Alloy.createController('educationBackground').getView().open();
		} else {
			Alloy.createController('ChildrenAndSiblings', [num1, num2]).getView().open();
		}

	}
}

$.familyDetails.open();
