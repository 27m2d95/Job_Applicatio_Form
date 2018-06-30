var hrParams = {
	dateHired : '',
	basicSalary : '',
	position : '',
	location : '',
	factory : '',
	hostel : '',
	prepareBy : '',
	approvedBy : '',
};

var myArray = ['KL', 'Penang'];
var myArray1 = ['Yes', 'No'];

var opts = {
	cancel : 2,
	options : myArray,
	destructive : 0,
};

var opts1 = {
	cancel : 2,
	options : myArray1,
	destructive : 0,
};

var dialog;

function datePicker(e) {
	$.dateHired.blur();
	var datePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
	});
	datePicker.showDatePickerDialog({
		callback : function(e) {
			if (!e.cancel) {
				var dateValue = e.value;
				$.dateHired.value = dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear();
				$.dateHired.blur();
			}
		}
	});
}

function locationPicker() {
	$.location.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.location.value = myArray[selectedIndex];
	});
}

function hostelPicker() {
	$.hostel.blur();
	dialog = Ti.UI.createOptionDialog(opts1);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hostel.value = myArray1[selectedIndex];
	});

}

function blr() {
	$.dateHired.blur();
	$.location.blur();
	$.hostel.blur();

}

function goTo(e) {
	if ($.dateHired.value == '' && $.dateHired.required == 1) {
		alert("Date Hired is Required");
		$.dateHired.focus();
		$.dateHired.setBorderColor('red');
		$.dateHired.setBorderWidth(1);
	} else if ($.basicSalary.value == '' && $.basicSalary.required == 1) {
		alert("Basic Salary is Required");
		$.basicSalary.focus();
		$.basicSalary.setBorderColor('red');
		$.basicSalary.setBorderWidth(1);
	} else if ($.position.value == '' && $.position.required == 1) {
		alert("Position is Required");
		$.position.focus();
		$.position.setBorderColor('red');
		$.position.setBorderWidth(1);
	} else if ($.location.value == '' && $.location.required == 1) {
		alert("Location is Required");
		$.location.focus();
		$.location.setBorderColor('red');
		$.location.setBorderWidth(1);
	} else if ($.factory.value == '' && $.factory.required == 1) {
		alert("Factory is Required");
		$.factory.focus();
		$.factory.setBorderColor('red');
		$.factory.setBorderWidth(1);
	} else if ($.hostel.value == '' && $.hostel.required == 1) {
		alert("Hostel is Required");
		$.hostel.focus();
		$.hostel.setBorderColor('red');
		$.hostel.setBorderWidth(1);
	} else if ($.prepareBy.value == '' && $.prepareBy.required == 1) {
		alert("Prepare By is Required");
		$.prepareBy.focus();
		$.prepareBy.setBorderColor('red');
		$.prepareBy.setBorderWidth(1);
	} else if ($.approvedBy.value == '' && $.approvedBy.required == 1) {
		alert("Approved By is Required");
		$.approvedBy.focus();
		$.approvedBy.setBorderColor('red');
		$.approvedBy.setBorderWidth(1);
	} else {

		hrParams = {
			dateHired : $.dateHired.value,
			basicSalary : $.basicSalary.value,
			position : $.position.value,
			location : $.location.value,
			factory : $.factory.value,
			hostel : $.hostel.value,
			prepareBy : $.prepareBy.value,
			approvedBy : $.approvedBy.value,
		};

		console.log(hrParams);

	}
}

$.hrUse.open();
