var educationBackgroundParams = [];
var add = false;

function addEB(e) {

	var institName2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Instituation Name',
		required : 1
	});

	var level2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Level Achieved',
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
	var cert2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Cert & Qualification',
		required : 1
	});

	var label = Ti.UI.createLabel({
		text : 'New Education Background Info:',
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
	view.add(institName2);
	view.add(year2);
	view.add(level2);
	view.add(cert2);

	$.viewadd.add(view);
}

function rmEB(e) {
	$.viewadd.setTop(0);

	var arr = $.viewadd.getChildren();
	if (arr.length > 0) {
		$.viewadd.remove(arr[arr.length - 1]);
	} else {
		alert('You Must Have at least 1 Education BAckground');
	}
}

function goTo(e) {
	if ($.institutionName.value == '' && $.institutionName.required == 1) {
		alert("Institution Name is Required");
		$.institutionName.focus();
		$.institutionName.setBorderColor('red');
		$.institutionName.setBorderWidth(1);

	} else if ($.year.value == '' && $.year.required == 1) {
		alert("Year is Required");
		$.year.focus();
		$.year.setBorderColor('red');
		$.year.setBorderWidth(1);

	} else if ($.levelAchieved.value == '' && $.levelAchieved.required == 1) {
		alert("Level Achieved is Required");
		$.levelAchieved.focus();
		$.levelAchieved.setBorderColor('red');
		$.levelAchieved.setBorderWidth(1);

	} else if ($.certQualification.value == '' && $.certQualification.required == 1) {
		alert("Cert & Qualification is Required");
		$.certQualification.focus();
		$.certQualification.setBorderColor('red');
		$.certQualification.setBorderWidth(1);

	} else {
		educationBackgroundParams.push({
			institutionName : $.institutionName.value,
			year : $.year.value,
			levelAchieved : $.levelAchieved.value,
			certQualification : $.certQualification.value
		});

		add = true;

		var get1 = $.viewadd.getChildren();
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
				if (arr.length == 4) {
					educationBackgroundParams.push({
						institutionName : arr[0],
						year : arr[1],
						levelAchieved : arr[2],
						certQualification : arr[3]
					});

					add = true;

				}

				arr = [];
			}

		}

		if (add == true) {
			console.log(educationBackgroundParams);
			Alloy.createController('languages').getView().open();
			//call api and send ----------->

		} else {
			alert('some fields are required');
		}
	}

	educationBackgroundParams = [];

	
}

$.educationBackground.open();

