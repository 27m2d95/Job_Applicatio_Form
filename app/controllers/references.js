var refParams = [];
var add = false;

function addRef(e) {

	var name2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Name',
		required : 1
	});

	var position2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Position',
		required : 1
	});

	var company2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Comany',
		required : 1
	});
	var relationship2 = Ti.UI.createTextField({
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
	var contactNumber2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
		backgroundColor : "#D3D3D3",
		hintText : '*Contact Number',
		required : 1
	});

	var label = Ti.UI.createLabel({
		text : 'New Reference Info:',
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
	view.add(name2);
	view.add(position2);
	view.add(company2);
	view.add(relationship2);
	view.add(contactNumber2);

	$.view1s.add(view);
}

function rmRef(e) {
	$.view1s.setTop(0);

	var arr = $.view1s.getChildren();
	if (arr.length > 0) {
		$.view1s.remove(arr[arr.length - 1]);
	} else {
		alert('You Must Have at least 1 Reference');
	}
}

function goTo(e) {
	if ($.name.value == '' && $.name.required == 1) {
		alert("Name is Required");
		$.name.focus();
		$.name.setBorderColor('red');
		$.name.setBorderWidth(1);

	} else if ($.position.value == '' && $.position.required == 1) {
		alert("Position is Required");
		$.position.focus();
		$.position.setBorderColor('red');
		$.position.setBorderWidth(1);

	} else if ($.company.value == '' && $.company.required == 1) {
		alert("Comapany is Required");
		$.company.focus();
		$.company.setBorderColor('red');
		$.company.setBorderWidth(1);

	} else if ($.relationship.value == '' && $.relationship.required == 1) {
		alert("Relationship is Required");
		$.relationship.focus();
		$.relationship.setBorderColor('red');
		$.relationship.setBorderWidth(1);

	} else if ($.contactNo.value == '' && $.contactNo.required == 1) {
		alert("Conatct Number is Required");
		$.contactNo.focus();
		$.contactNo.setBorderColor('red');
		$.contactNo.setBorderWidth(1);

	} else {
		refParams.push({
			refName : $.name.value,
			refPosition : $.position.value,
			refCompany : $.company.value,
			refRelationship : $.relationship.value,
			refContactNo : $.contactNo.value
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
				if (arr.length == 5) {
					refParams.push({
						refName : arr[0],
						refPosition : arr[1],
						refCompany : arr[2],
						refRelationship : arr[3],
						refContactNo : arr[4]
					});

					add = true;

				}

				arr = [];
			}

		}

		if (add == true) {
			console.log(refParams);
			//call api and send ----------->
			Alloy.createController('generalInfo').getView().open();
		} else {
			alert('some fields are required');
		}

	}

	refParams = [];

}

$.references.open();
