function datePicker(e) {
	$.dateOfBirth.blur();
	var datePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
	});
	datePicker.showDatePickerDialog({
		callback : function(e) {
			if (!e.cancel) {
				var dateValue = e.value;
				$.dateOfBirth.value = dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear();
				$.dateOfBirth.blur();
			}
		}
	});
}

function blr(e) {
	$.dateOfBirth.blur();
}

var gender = ['Male', 'Female'];

var opts = {
	cancel : 2,
	options : gender,
	destructive : 0,
};

var dialog;
function genderPicker() {
	$.gender.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', onSelectDialog);
}

function onSelectDialog(event) {
	var selectedIndex = event.source.selectedIndex;
	$.gender.value = gender[selectedIndex];
}

function goToEmergencyContact(e) {
	if ($.age.value == '' && $.age.required == 1) {
		alert("Age is Required");
		$.age.focus();
		$.age.setBorderColor('red');
		$.age.setBorderWidth(1);
	} else if ($.dateOfBirth.value == '' && $.dateOfBirth.required == 1) {
		alert("DOB is Required");
		$.dateOfBirth.focus();
		$.dateOfBirth.setBorderColor('red');
		$.dateOfBirth.setBorderWidth(1);
	} else if ($.gender.value == '' && $.gender.required == 1) {
		alert("Gender is Required");
		$.gender.focus();
		$.gender.setBorderColor('red');
		$.gender.setBorderWidth(1);
	} else if ($.nationality.value == '' && $.nationality.required == 1) {
		alert("Nationality is Required");
		$.nationality.focus();
		$.nationality.setBorderColor('red');
		$.nationality.setBorderWidth(1);
	} else if ($.race.value == '' && $.race.required == 1) {
		alert("Race is Required");
		$.race.focus();
		$.race.setBorderColor('red');
		$.race.setBorderWidth(1);
	} else if ($.religious.value == '' && $.religious.required == 1) {
		alert("Religious is Required");
		$.religious.focus();
		$.religious.setBorderColor('red');
		$.religious.setBorderWidth(1);
	} else if ($.maritalStatus.value == '' && $.maritalStatus.required == 1) {
		alert("Marital Status is Required");
		$.maritalStatus.focus();
		$.maritalStatus.setBorderColor('red');
		$.maritalStatus.setBorderWidth(1);
	} else if ($.phoneNum.value == '' && $.phoneNum.required == 1) {
		alert("phone Number is Required");
		$.phoneNum.focus();
		$.phoneNum.setBorderColor('red');
		$.phoneNum.setBorderWidth(1);
	} else if ($.emailAddress.value == '' && $.emailAddress.required == 1) {
		alert("Email Address is Required");
		$.emailAddress.focus();
		$.emailAddress.setBorderColor('red');
		$.emailAddress.setBorderWidth(1);
	} else if ($.homeAddress.value == '' && $.homeAddress.required == 1) {
		alert("Home Address is Required");
		$.homeAddress.focus();
		$.homeAddress.setBorderColor('red');
		$.homeAddress.setBorderWidth(1);
	} else {
		var personalInfoParams = {
			age : $.age.value,
			dateOfBirth : $.dateOfBirth.value,
			gender : $.gender.value,
			nationality : $.nationality.value,
			race : $.race.value,
			religious : $.religious.value,
			maritalStatus : $.maritalStatus.value,
			phoneNum : $.phoneNum.value,
			emailAddress : $.emailAddress.value,
			homeAddress : $.homeAddress.value,
			EPFNo : $.EPFNo.value,
			drivingLicence : $.drivingLicence.value,
			corespondenceAddress : $.corespondenceAddress.value,
		};
		console.log(personalInfoParams);

		//send data call api
		//open next new view
		Alloy.createController('emergencyContact').getView().open();

	}

}

$.personalInfo.open();
