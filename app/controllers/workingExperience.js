var questionParams = {
	appliedBefore : 'No',
	dateApplied : '',
	positionApplied : '',
	friendASP : 'No',
	friendASPName : '',
	friendRelation : '',
	friendPosition : '',
};

var workingExperienceParams = [];

var myArray = ['Yes', 'No'];

var view;

var opts = {
	cancel : 2,
	options : myArray,
	destructive : 0,
};

var bool = false;

var dialog;
function firstPicker() {
	$.appliedQ.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.appliedQ.value = myArray[selectedIndex];

		if ($.appliedQ.value == 'Yes') {

			var dateApplied = Ti.UI.createTextField({
				width : 155,
				height : Ti.UI.SIZE,
				top : 15,
				hintTextColor : "gray",
				color : "black",
				borderRadius : 100,
				borderColor : "#D3D3D3",
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
				backgroundColor : "#D3D3D3",
				hintText : '*Data Appied',
				required : 1,
				right : 10,
			});

			var positionApplied = Ti.UI.createTextField({
				width : 155,
				height : Ti.UI.SIZE,
				top : 15,
				hintTextColor : "gray",
				color : "black",
				borderRadius : 100,
				borderColor : "#D3D3D3",
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : "#D3D3D3",
				hintText : '*Poition',
				required : 1,
				left : 10,
			});

			var viewAppliedChildren = $.viewApplied.getChildren();
			if (viewAppliedChildren == 0) {
				$.friendQ.setTop(50);
				$.viewApplied.add(dateApplied);
				$.viewApplied.add(positionApplied);
			}

		} else {
			$.friendQ.setTop(15);
			var viewAppliedChildren = $.viewApplied.getChildren();
			if (viewAppliedChildren.length > 0) {
				for (var i = 0; i < viewAppliedChildren.length; i++) {
					$.viewApplied.remove(viewAppliedChildren[i]);
				}
			}

		}
	});
}

function secondPicker() {
	$.friendQ.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.friendQ.value = myArray[selectedIndex];

		if ($.friendQ.value == 'Yes') {
			var friendName = Ti.UI.createTextField({
				width : 330,
				height : Ti.UI.SIZE,
				top : 15,
				hintTextColor : "gray",
				color : "black",
				borderRadius : 100,
				borderColor : "#D3D3D3",
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : "#D3D3D3",
				hintText : '*Name',
				required : 1,
			});

			var friendPosition = Ti.UI.createTextField({
				width : 330,
				height : Ti.UI.SIZE,
				top : 15,
				hintTextColor : "gray",
				color : "black",
				borderRadius : 100,
				borderColor : "#D3D3D3",
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : "#D3D3D3",
				hintText : '*Poition',
				required : 1,
			});

			var relationship = Ti.UI.createTextField({
				width : 330,
				height : Ti.UI.SIZE,
				top : 15,
				hintTextColor : "gray",
				color : "black",
				borderRadius : 100,
				borderColor : "#D3D3D3",
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : "#D3D3D3",
				hintText : '*RElationship',
				required : 1,
			});

			var viewFriendChildren = $.viewFriend.getChildren();

			if (viewFriendChildren.length == 0) {
				$.exQ.setTop(50);
				$.viewFriend.add(friendName);
				$.viewFriend.add(friendPosition);
				$.viewFriend.add(relationship);
			}

		} else {
			$.exQ.setTop(15);
			var viewFriendChildren = $.viewFriend.getChildren();
			if (viewFriendChildren.length > 0) {
				for (var i = 0; i < viewFriendChildren.length; i++) {
					$.viewFriend.remove(viewFriendChildren[i]);
				}
			}

		}
	});
}

function thirdPicker() {
	$.exQ.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.exQ.value = myArray[selectedIndex];

		if ($.exQ.value == 'Yes') {

			var addButton = Titanium.UI.createButton({
				title : 'Add',
				width : 135,
				top : 15,
				backgroundColor : "red",
				borderRadius : 100,
				right : 30,
			});

			var removeButton = Titanium.UI.createButton({
				title : 'Remove',
				width : 135,
				top : 15,
				backgroundColor : "red",
				borderRadius : 100,
				left : 30,
			});

			addButton.addEventListener('click', function(e) {
				addWorkingExperience();
			});

			removeButton.addEventListener('click', function(e) {
				rmWorkingExperience();
			});

			var viewEX = $.view1s.getChildren();
			var viewEX1 = $.view2s.getChildren();

			if (viewEX.length == 0 && viewEX1.length == 0) {
				addWorkingExperience();
				$.view2s.add(addButton);
				$.view2s.add(removeButton);
			}

		} else {
			var viewEX = $.view1s.getChildren();
			var viewEX1 = $.view2s.getChildren();
			if (viewEX.length > 0 && viewEX1.length > 0) {
				for (var i = 0; i < viewEX.length; i++) {
					$.view1s.remove(viewEX[i]);
				}
				for (var i = 0; i < viewEX1.length; i++) {
					$.view2s.remove(viewEX1[i]);
				}
			}

		}
	});
}

function fourthPicker() {
	$.courses.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.courses.value = myArray[selectedIndex];
	});
}

function addWorkingExperience(e) {

	var companyName2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : 'Company Name',
		required : 1
	});

	var positionHeld2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : 'Position Held',
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
		hintText : 'Year of Service',
		keyboardType : Titanium.UI.KEYBOARD_TYPE_NUMBER_PAD,
		required : 1,

	});
	var salary2 = Ti.UI.createTextField({
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
		hintText : 'Last Drawn Salary',
		required : 1,
	});
	var reason2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : 'Reason of Leaving',
		required : 1
	});

	var label = Ti.UI.createLabel({
		text : 'New Working Experience Info:',
		color : 'black',
		left : 10,
		font : {
			fontSize : '18dp',
			fontFamily : 'Roboto-Light',
		},
	});

	view = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		top : 20,
	});

	view.add(label);
	view.add(companyName2);
	view.add(positionHeld2);

	view.add(year2);
	view.add(salary2);
	view.add(reason2);

	$.view1s.add(view);

}

function rmWorkingExperience(e) {
	$.view1s.setTop(0);

	var arr = $.view1s.getChildren();
	if (arr.length == 1) {
		alert('You Must Have at least 1 Company');
	} else {

		$.view1s.remove(arr[arr.length - 1]);
	}
}

function goTo(e) {
	if ($.appliedQ.value == '' && $.appliedQ.required == 1) {
		$.appliedQ.focus();
		$.appliedQ.setBorderColor('red');
		$.appliedQ.setBorderWidth(1);
	} else {
		bool = true;
		var viewAppliedChildren = $.viewApplied.getChildren();
		var firstPickerarr = [];
		if (viewAppliedChildren.length > 0) {
			for (var i = 0; i < viewAppliedChildren.length; i++) {
				bool = false;
				if (viewAppliedChildren[i].value == '' && viewAppliedChildren[i].required == 1) {
					viewAppliedChildren[i].borderColor = "red";
					viewAppliedChildren[i].borderWidth = 1;
				} else {
					firstPickerarr.push(viewAppliedChildren[i].value);
				}

				if (firstPickerarr.length == 2) {
					questionParams = {
						appliedBefore : $.appliedQ.value,
						dateApplied : firstPickerarr[0],
						positionApplied : firstPickerarr[1],
					};
					bool = true;
				}

				firstPickerarr = [];
			}

		}
	}

	if ($.friendQ.value == '' && $.friendQ.required == 1) {
		$.friendQ.focus();
		$.friendQ.setBorderColor('red');
		$.friendQ.setBorderWidth(1);
	} else {
		bool = true;
		var viewFriendChildren = $.viewFriend.getChildren();
		var secondPickerarr = [];

		if (viewFriendChildren.length > 0) {
			for (var i = 0; i < viewFriendChildren.length; i++) {
				bool = false;
				if (viewFriendChildren[i].value == '' && viewFriendChildren[i].required == 1) {
					viewFriendChildren[i].borderColor = "red";
					viewFriendChildren[i].borderWidth = 1;
				} else {
					secondPickerarr.push(viewFriendChildren[i].value);
				}

				if (secondPickerarr.length == 3) {
					questionParams = {
						friendASP : $.friendQ.value,
						friendASPName : secondPickerarr[0],
						friendRelation : secondPickerarr[1],
						friendPosition : secondPickerarr[2]
					};
					bool = true;
				}

				secondPickerarr = [];

			}

		}

	}

	if ($.exQ.value == '' && $.exQ.required == 1) {
		$.exQ.focus();
		$.exQ.setBorderColor('red');
		$.exQ.setBorderWidth(1);
	} else {
		bool = true;
		var view1sChildren = $.view1s.getChildren();
		var mainarr = [];

		if (view1sChildren.length > 0) {
			for (var i = 0; i < view1sChildren.length; i++) {
				bool = false;
				var check = view1sChildren[i].getChildren();
				for (var j = 0; j < check.length; j++) {
					if (check[j].value == '' && check[j].required == 1) {
						check[j].borderColor = "red";
						check[j].borderWidth = 1;
					} else {
						mainarr.push(check[j].value);
					}

				}

				if (mainarr.length == 6) {
					workingExperienceParams.push({
						companyName : mainarr[1],
						positionHeld : mainarr[2],
						yearOfService : mainarr[3],
						lastSalary : mainarr[4],
						leavingReason : mainarr[5]
					});

					bool = true;
				}
				mainarr = [];

			}
		}

	}

	if ($.courses.value == '' && $.courses.required == 1) {
		$.courses.focus();
		$.courses.setBorderColor('red');
		$.courses.setBorderWidth(1);
		bool = false;
	}

	if (bool == true) {
		console.log(questionParams);
		console.log(workingExperienceParams);

		if ($.courses.value == 'Yes') {
			Alloy.createController('coursesAndTraining').getView().open();
			//api
		} else {
			Alloy.createController('references').getView().open();
			//api
		}

	} else {
		alert('Some Fields are Required');
	}

	workingExperienceParams = [];

}

$.workingExperience.open();
