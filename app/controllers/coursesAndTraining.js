var courseAttendedParams = [];
var add = false;

function addCourse(e) {

	var courseName2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Course Name',
		required : 1
	});

	var year2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Year',
		keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
		required : 1
	});
	var organiz2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Organised By',
		required : 1
	});

	var label = Ti.UI.createLabel({
		text : 'New Course Info:',
		color : 'black',
		left : 10,
		font : {
			fontSize : '18dp',
			fontFamily : 'Roboto-Light',
		},
	});

	var view = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		top : 20,
	});

	view.add(label);
	view.add(courseName2);
	view.add(year2);
	view.add(organiz2);

	$.view1s.add(view);
}

function rmCourse(e) {
	$.view1s.setTop(0);

	var arr = $.view1s.getChildren();
	if (arr.length > 0) {
		$.view1s.remove(arr[arr.length - 1]);
	} else {
		alert('You Must Have at least 1 Course');
	}
}

function goTo(e) {
	if ($.courseName.value == '' && $.courseName.required == 1) {
		alert("Course Name is Required");
		$.courseName.focus();
		$.courseName.setBorderColor('red');
		$.courseName.setBorderWidth(1);

	} else if ($.year.value == '' && $.year.required == 1) {
		alert("Year is Required");
		$.year.focus();
		$.year.setBorderColor('red');
		$.year.setBorderWidth(1);

	} else if ($.organization.value == '' && $.organization.required == 1) {
		alert("Organization is Required");
		$.organization.focus();
		$.organization.setBorderColor('red');
		$.organization.setBorderWidth(1);

	} else {
		courseAttendedParams.push({
			courseName : $.courseName.value,
			year : $.year.value,
			organization : $.organization.value,
		});

		add = true;

		var get1 = $.view1s.getChildren();
		var arr = [];

		if (get1.length > 0) {

			for (var i = 0; i < get1.length; i++) {
				add = false;
				for (var j = 1; j < get1[i].getChildren().length; j++) {
					if (get1[i].getChildren()[j].value == '' && get1[i].getChildren()[j].required == 1) {
						get1[i].getChildren()[j].borderColor = "red";
						get1[i].getChildren()[j].borderWidth = 1;
					} else {
						arr.push(get1[i].getChildren()[j].value);
					}

				}
				if (arr.length == 3) {
					courseAttendedParams.push({
						courseName : arr[0],
						year : arr[1],
						organization : arr[2],
					});

					add = true;

				}

				arr = [];
			}

		}

		if (add == true) {
			console.log(courseAttendedParams);
			//call api and send ----------->

			Alloy.createController('references').getView().open();
		} else {
			alert('some fields are required');
		}

	}

	courseAttendedParams = [];

}

$.coursesAndTraining.open();
