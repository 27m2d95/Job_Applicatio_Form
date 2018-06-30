var emergencyContactParams = [];
var add = false;

function addContact(e) {

	var ecPersonName2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Person Name',
		required : 1
	});

	var ecRelationship2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Relationship',
		required : 1
	});

	var ecContactNumber2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Contact Number',
		keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
		required : 1
	});
	var ecAddress2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Address',
		required : 1
	});

	var label = Ti.UI.createLabel({
		text : 'New Contact Info:',
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
	view.add(ecPersonName2);
	view.add(ecRelationship2);
	view.add(ecContactNumber2);
	view.add(ecAddress2);

	$.view1s.add(view);
}

function rmContact(e) {
	$.view1s.setTop(0);

	var arr = $.view1s.getChildren();
	if (arr.length > 0) {
		$.view1s.remove(arr[arr.length - 1]);
	} else {
		alert('You Must Have at least 1 Emergency Contact');
	}
}

function goToFamilyDetails(e) {
	if ($.ecPersonName.value == '' && $.ecPersonName.required == 1) {
		alert("Emergrncy Conatact Name is Required");
		$.ecPersonName.focus();
		$.ecPersonName.setBorderColor('red');
		$.ecPersonName.setBorderWidth(1);

	} else if ($.ecRelationship.value == '' && $.ecRelationship.required == 1) {
		alert("Emergrncy Conatact Relationship  is Required");
		$.ecRelationship.focus();
		$.ecRelationship.setBorderColor('red');
		$.ecRelationship.setBorderWidth(1);

	} else if ($.ecContactNumber.value == '' && $.ecContactNumber.required == 1) {
		alert("Emergrncy Conatact Number  is Required");
		$.ecContactNumber.focus();
		$.ecContactNumber.setBorderColor('red');
		$.ecContactNumber.setBorderWidth(1);

	} else if ($.ecAddress.value == '' && $.ecAddress.required == 1) {
		alert("Emergrncy Conatact Address is Required");
		$.ecAddress.focus();
		$.ecAddress.setBorderColor('red');
		$.ecAddress.setBorderWidth(1);

	} else {
		emergencyContactParams.push({
			ecPersonName : $.ecPersonName.value,
			ecRelationship : $.ecRelationship.value,
			ecContactNumber : $.ecContactNumber.value,
			ecAddress : $.ecAddress.value
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
				if (arr.length == 4) {
					emergencyContactParams.push({
						ecPersonName : arr[0],
						ecRelationship : arr[1],
						ecContactNumber : arr[2],
						ecAddress : arr[3]
					});

					add = true;
				}

				arr = [];
			}

		}

		if (add == true) {
			console.log(emergencyContactParams);
			// //call api and send ----------->

			Alloy.createController('familyDetails').getView().open();
		} else {
			if (get1.length > 0) {
				alert('some fields are required');
			}

		}

	}

	emergencyContactParams = [];

}

$.emergencyContact.open();

