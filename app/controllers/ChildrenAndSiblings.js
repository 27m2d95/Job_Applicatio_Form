var childrenParams = [];
var siblingParams = [];

var args = $.args[0];
var args2 = $.args[1];

var add;

for (var i = 0; i < args2; i++) {
	var childName = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Child Name',
		required : 1
	});

	var childGender = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 0,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Child Gender',
		required : 1,
		left : 10,
	});

	var childAge = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 0,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Child Age',
		keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
		required : 1,
		right : 10
	});

	var childLabel = Ti.UI.createLabel({
		text : 'Child ' + (i + 1),
		color : 'black',
		left : 10,
		font : {
			fontSize : '18dp',
			fontFamily : 'Roboto-Light',
		},
	});

	var childView = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		top : 10,
	});
	var childView2 = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'horizontal',
		top : 10,
	});

	childView.add(childLabel);
	childView.add(childName);

	childView2.add(childAge);
	childView2.add(childGender);

	$.cView.add(childView);
	$.cView.add(childView2);

}

for (var i = 0; i < args; i++) {
	var siblingName = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Sibling Name',
		required : 1,
	});

	var siblingAge = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 0,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Sibling Age',
		keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
		required : 1,
		right : 10
	});

	var siblingOccuption = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 10,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Sibling Occupation',
		required : 1,
	});

	var siblingGender = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 0,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Sibling Gender',
		required : 1,
		left : 10,
	});

	var siblingLabel = Ti.UI.createLabel({
		text : 'Sibling ' + (i + 1),
		color : 'black',
		left : 10,
		font : {
			fontSize : '18dp',
			fontFamily : 'Roboto-Light',
		},
	});

	var siblingView = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		top : 10,
	});

	var siblingView2 = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'horizontal',
		top : 10,
	});

	siblingView.add(siblingLabel);
	siblingView.add(siblingName);
	siblingView2.add(siblingAge);
	siblingView2.add(siblingGender);
	siblingView.add(siblingOccuption);

	$.sView.add(siblingView);
	$.sView.add(siblingView2);
}

function goToEducationBackground(e) {
	var arr1 = $.cView.getChildren();
	var arr2 = $.sView.getChildren();

	var child = [];
	var sibling = [];

	if (arr1.length > 0) {
		add = false;
		for (var i = 0; i < arr1.length; i = i + 2) {
			add = false;
			for (var j = 1; j < arr1[i].getChildren().length; j++) {
				if (arr1[i].getChildren()[j].value == '' && arr1[i].getChildren()[j].required == 1) {
					arr1[i].getChildren()[j].borderColor = "red";
					arr1[i].getChildren()[j].borderWidth = 1;
				} else {
					child.push(arr1[i].getChildren()[j].value);
				}
			}
			for (var j = 0; j < arr1[i + 1].getChildren().length; j++) {
				if (arr1[i+1].getChildren()[j].value == '' && arr1[i+1].getChildren()[j].required == 1) {
					arr1[i+1].getChildren()[j].borderColor = "red";
					arr1[i+1].getChildren()[j].borderWidth = 1;
				} else {
					child.push(arr1[i+1].getChildren()[j].value);
				}
			}
			if (child.length == 3) {
				childrenParams.push({
					childName : child[0],
					childAge : child[1],
					childGender : child[2]
				});

				add = true;
			}

			child = [];
		}
	}

	if (arr2.length > 0) {
		add = false;
		for (var i = 0; i < arr2.length; i = i + 2) {
			add = false;
			for (var j = 1; j < arr2[i].getChildren().length; j++) {
				if (arr2[i].getChildren()[j].value == '' && arr2[i].getChildren()[j].required == 1) {
					arr2[i].getChildren()[j].borderColor = "red";
					arr2[i].getChildren()[j].borderWidth = 1;
				} else {
					sibling.push(arr2[i].getChildren()[j].value);
				}
			}
			for (var j = 0; j < arr2[i + 1].getChildren().length; j++) {
				if (arr2[i+1].getChildren()[j].value == '' && arr2[i+1].getChildren()[j].required == 1) {
					arr2[i+1].getChildren()[j].borderColor = "red";
					arr2[i+1].getChildren()[j].borderWidth = 1;
				} else {
					sibling.push(arr2[i+1].getChildren()[j].value);
				}
			}
			if (sibling.length == 4) {
				siblingParams.push({
					siblingName : sibling[0],
					siblingOccupation : sibling[1],
					siblingAge : sibling[2],
					siblingGender : sibling[3]
				});

				add = true;
			}

			sibling = [];
		}
	}

	if (add == true) {
		console.log(childrenParams);
		console.log(siblingParams);
		Alloy.createController('educationBackground').getView().open();
		//call api
		//push new page
	} else {
		alert('some fields are required');
	}

	childrenParams = [];
	siblingParams = [];

}

$.ChildrenAndSiblings.open();
