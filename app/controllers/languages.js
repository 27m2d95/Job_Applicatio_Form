var languagesParams = [];

var add = false;

var myArray = ['Good', 'Fair', 'Poor'];

var view,
    view2,
    view3;

var opts = {
	cancel : 3,
	options : myArray,
	destructive : 0,
};
var dialog;

function underPicker() {
	$.understanding.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.understanding.value = myArray[selectedIndex];
	});
}

function speakPicker() {
	$.speaking.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.speaking.value = myArray[selectedIndex];
	});
}

function readPicker() {
	$.reading.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.reading.value = myArray[selectedIndex];
	});
}

function writePicker() {
	$.writing.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.writing.value = myArray[selectedIndex];
	});
}

function addLang(e) {

	var lang2 = Ti.UI.createTextField({
		width : 330,
		height : Ti.UI.SIZE,
		top : 5,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Language',
		required : 1
	});

	var understanding2 = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Understanding',
		required : 1,
		right : 10,
	});

	var speaking2 = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Speaking',
		required : 1,
		left : 10,
	});
	var reading2 = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Reading',
		required : 1,
		right : 10
	});

	var writing2 = Ti.UI.createTextField({
		width : 155,
		height : Ti.UI.SIZE,
		top : 15,
		hintTextColor : "gray",
		color : "black",
		borderRadius : 100,
		borderColor : "#D3D3D3",
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
		backgroundColor : "#D3D3D3",
		hintText : '*Writing',
		required : 1,
		left : 10
	});

	var label = Ti.UI.createLabel({
		text : 'New Language Info:',
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
	view2 = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'horizontal',
		top : 0,
	});
	view3 = Ti.UI.createView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		layout : 'horizontal',
		top : 0,
	});

	view.add(label);
	view.add(lang2);

	view2.add(understanding2);
	view2.add(speaking2);

	view3.add(reading2);
	view3.add(writing2);

	view.add(view2);
	view.add(view3);

	$.viewadd.add(view);

	var gett = view2.getChildren();
	var gett1 = view3.getChildren();

	for (let i = 0; i < gett.length; i++) {
		gett[i].addEventListener('focus', function() {
			gett[i].blur();
		});
		gett[i].addEventListener('touchend', function() {
			gett[i].blur();
			dialog = Ti.UI.createOptionDialog(opts);
			dialog.show();
			dialog.addEventListener('click', function(event) {
				var selectedIndex = event.source.selectedIndex;
				gett[i].value = myArray[selectedIndex];
			});

		});
	}

	for (let i = 0; i < gett1.length; i++) {
		gett1[i].addEventListener('focus', function() {
			gett1[i].blur();
		});
		gett1[i].addEventListener('touchend', function() {
			gett1[i].blur();
			dialog = Ti.UI.createOptionDialog(opts);
			dialog.show();
			dialog.addEventListener('click', function(event) {
				var selectedIndex = event.source.selectedIndex;
				gett1[i].value = myArray[selectedIndex];
			});

		});
	}

}

function rmLang(e) {
	$.viewadd.setTop(0);

	var arr = $.viewadd.getChildren();
	if (arr.length > 0) {
		$.viewadd.remove(arr[arr.length - 1]);
	} else {
		alert('You Must Have at least 1 Language');
	}
}

function goToWorkingExperience(e) {
	if ($.langName.value == '' && $.langName.required == 1) {
		alert("Language Name is Required");
		$.langName.focus();
		$.langName.setBorderColor('red');
		$.langName.setBorderWidth(1);

	} else if ($.understanding.value == '' && $.understanding.required == 1) {
		alert("This Field is Required");
		$.understanding.focus();
		$.understanding.blur();
		$.understanding.setBorderColor('red');
		$.understanding.setBorderWidth(1);

	} else if ($.speaking.value == '' && $.speaking.required == 1) {
		alert("This Field is Required");
		$.speaking.focus();
		$.speaking.blur();
		$.speaking.setBorderColor('red');
		$.speaking.setBorderWidth(1);

	} else if ($.reading.value == '' && $.reading.required == 1) {
		alert("his Field is Required");
		$.reading.focus();
		$.reading.blur();
		$.reading.setBorderColor('red');
		$.reading.setBorderWidth(1);

	} else if ($.writing.value == '' && $.writing.required == 1) {
		alert("his Field is Required");
		$.writing.focus();
		$.writing.blur();
		$.writing.setBorderColor('red');
		$.writing.setBorderWidth(1);

	} else {
		languagesParams.push({
			langName : $.langName.value,
			understanding : $.understanding.value,
			speaking : $.speaking.value,
			reading : $.reading.value,
			writing : $.writing.value
		});

		add = true;

		var ar = [];
		var mainView = $.viewadd.getChildren();

		if (mainView.length > 0) {
			for (let i = 0; i < mainView.length; i++) {
				add = false;
				var getView = mainView[i].getChildren();
				for (let j = 0; j < getView.length; j++) {
					var getView2 = getView[j].getChildren();
					if (getView2.length == 0) {
						if (getView[j].value == '' && getView[j].required == 1) {
							getView[j].borderColor = "red";
							getView[j].borderWidth = 1;
						} else {
							ar.push(getView[j].value);
						}
					} else {
						var getView3 = getView[j].getChildren();
						for (let k = 0; k < getView3.length; k++) {
							if (getView3[k].value == '' && getView3[k].required == 1) {
								getView3[k].borderColor = "red";
								getView3[k].borderWidth = 1;
							} else {
								ar.push(getView3[k].value);
							}
						}
					}

				}
				if (ar.length == 6) {
					languagesParams.push({
						langName : ar[1],
						understanding : ar[2],
						speaking : ar[3],
						reading : ar[4],
						writing : ar[5]
					});

					add = true;

				}

				ar = [];
			}
		}

		console.log(add);

		if (add == true) {
			//api send ---- >
			console.log(languagesParams);
			Alloy.createController('workingExperience').getView().open();

		} else {
			alert('some fields are required');
		}
	}

	languagesParams = [];

}

$.languages.open();

