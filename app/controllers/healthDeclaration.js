var healthDeclarationParams = {
	Psychiartic : '',
	Epilepsy : '',
	Migraine : '',
	Hysteria : '',
	Allergic_Rhinitis : '',
	Asthma : '',
	Tuberculosis : '',
	Hypertension : '',
	Diabetes_Mellitus : '',
	Heart_Diseases : '',
	Thyroid_Disease : '',
	Kidney_Diseases : '',
	Gastric : '',
	HIV : '',
	cancer:'',
	Venereal_Diseases : '',
	Leukemia : '',
	Hepatitis : ''
};

var healthDeclarationDescParams = {
	Psychiartic_Desc : '',
	Epilepsy_Desc : '',
	Migraine_Desc : '',
	Hysteria_Desc : '',
	Allergic_Rhinitis_Desc : '',
	Asthma_Desc : '',
	Tuberculosis_Desc : '',
	Hypertension_Desc : '',
	Diabetes_Mellitus_Desc : '',
	Heart_Diseases_Desc : '',
	Thyroid_Disease_Desc : '',
	Kidney_Diseases_Desc : '',
	Gastric_Desc : '',
	HIV_Desc : '',
	cance_Desc:'',
	Venereal_Diseases_Desc : '',
	Leukemia_Desc : '',
	Hepatitis_Desc : ''
};

var describe= [];

for(var i=1; i<=18; i++){
	describe[i] = Ti.UI.createTextField({
				width : 385,
				height : 50,
				hintTextColor : "gray",
				color : "black",
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				backgroundColor : "#D3D3D3",
				hintText : '*Description',
				required : 1,
				value:'',
			});
}

var bool = false;

var myArray = ['Yes', 'No'];

var opts = {
	cancel : 2,
	options : myArray,
	destructive : 0,
};

var dialog;


function hd1Picker() {
	$.hd1.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd1.value = myArray[selectedIndex];

		var hd1ViewChildren = $.hd1View.getChildren();

		if ($.hd1.value == "Yes") {

			if (hd1ViewChildren == 0) {
				$.hd1View.add(describe[1]);
			}
		} else {
			if (hd1ViewChildren.length > 0) {
				for (var i = 0; i < hd1ViewChildren.length; i++) {
					$.hd1View.remove(hd1ViewChildren[i]);
				}
			}
		}
	});

}

function hd2Picker() {
	$.hd2.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd2.value = myArray[selectedIndex];

		var hd2ViewChildren = $.hd2View.getChildren();

		if ($.hd2.value == "Yes") {

			if (hd2ViewChildren == 0) {
				$.hd2View.add(describe[2]);
			}
		} else {
			if (hd2ViewChildren.length > 0) {
				for (var i = 0; i < hd2ViewChildren.length; i++) {
					$.hd2View.remove(hd2ViewChildren[i]);
				}
			}
		}
	});

}

function hd3Picker() {
	$.hd3.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd3.value = myArray[selectedIndex];

		hd3ViewChildren = $.hd3View.getChildren();

		if ($.hd3.value == "Yes") {

			if (hd3ViewChildren == 0) {
				$.hd3View.add(describe[3]);
			}
		} else {
			if (hd3ViewChildren.length > 0) {
				for (var i = 0; i < hd3ViewChildren.length; i++) {
					$.hd3View.remove(hd3ViewChildren[i]);
				}
			}
		}
	});

}

function hd4Picker() {
	$.hd4.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd4.value = myArray[selectedIndex];

		var hd4ViewChildren = $.hd4View.getChildren();

		if ($.hd4.value == "Yes") {

			if (hd4ViewChildren == 0) {
				$.hd4View.add(describe[4]);
			}
		} else {
			if (hd4ViewChildren.length > 0) {
				for (var i = 0; i < hd4ViewChildren.length; i++) {
					$.hd4View.remove(hd4ViewChildren[i]);
				}
			}
		}
	});

}

function hd5Picker() {
	$.hd5.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd5.value = myArray[selectedIndex];

		var hd5ViewChildren = $.hd5View.getChildren();

		if ($.hd5.value == "Yes") {

			if (hd5ViewChildren == 0) {
				$.hd5View.add(describe[5]);
			}
		} else {
			if (hd5ViewChildren.length > 0) {
				for (var i = 0; i < hd5ViewChildren.length; i++) {
					$.hd5View.remove(hd5ViewChildren[i]);
				}
			}
		}
	});

}

function hd6Picker() {
	$.hd6.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd6.value = myArray[selectedIndex];

		var hd6ViewChildren = $.hd6View.getChildren();

		if ($.hd6.value == "Yes") {

			if (hd6ViewChildren == 0) {
				$.hd6View.add(describe[6]);
			}
		} else {
			if (hd6ViewChildren.length > 0) {
				for (var i = 0; i < hd6ViewChildren.length; i++) {
					$.hd6View.remove(hd6ViewChildren[i]);
				}
			}
		}
	});

}

function hd7Picker() {
	$.hd7.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd7.value = myArray[selectedIndex];

		var hd7ViewChildren = $.hd7View.getChildren();

		if ($.hd7.value == "Yes") {

			if (hd7ViewChildren == 0) {
				$.hd7View.add(describe[7]);
			}
		} else {
			if (hd7ViewChildren.length > 0) {
				for (var i = 0; i < hd7ViewChildren.length; i++) {
					$.hd7View.remove(hd7ViewChildren[i]);
				}
			}
		}
	});

}

function hd8Picker() {
	$.hd8.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd8.value = myArray[selectedIndex];

		var hd8ViewChildren = $.hd8View.getChildren();

		if ($.hd8.value == "Yes") {

			if (hd8ViewChildren == 0) {
				$.hd8View.add(describe[8]);
			}
		} else {
			if (hd8ViewChildren.length > 0) {
				for (var i = 0; i < hd8ViewChildren.length; i++) {
					$.hd8View.remove(hd8ViewChildren[i]);
				}
			}
		}
	});

}

function hd9Picker() {
	$.hd9.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd9.value = myArray[selectedIndex];

		var hd9ViewChildren = $.hd9View.getChildren();

		if ($.hd9.value == "Yes") {

			if (hd9ViewChildren == 0) {
				$.hd9View.add(describe[9]);
			}
		} else {
			if (hd9ViewChildren.length > 0) {
				for (var i = 0; i < hd9ViewChildren.length; i++) {
					$.hd9View.remove(hd9ViewChildren[i]);
				}
			}
		}
	});

}

function hd10Picker() {
	$.hd10.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd10.value = myArray[selectedIndex];

		var hd10ViewChildren = $.hd10View.getChildren();

		if ($.hd10.value == "Yes") {
			
			if (hd10ViewChildren == 0) {
				$.hd10View.add(describe[10]);
			}
		} else {
			if (hd10ViewChildren.length > 0) {
				for (var i = 0; i < hd10ViewChildren.length; i++) {
					$.hd10View.remove(hd10ViewChildren[i]);
				}
			}
		}
	});

}

function hd11Picker() {
	$.hd11.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd11.value = myArray[selectedIndex];

		var hd11ViewChildren = $.hd11View.getChildren();

		if ($.hd11.value == "Yes") {
			
			if (hd11ViewChildren == 0) {
				$.hd11View.add(describe[11]);
			}
		} else {
			if (hd11ViewChildren.length > 0) {
				for (var i = 0; i < hd11ViewChildren.length; i++) {
					$.hd11View.remove(hd11ViewChildren[i]);
				}
			}
		}
	});

}

function hd12Picker() {
	$.hd12.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd12.value = myArray[selectedIndex];

		var hd12ViewChildren = $.hd12View.getChildren();

		if ($.hd12.value == "Yes") {
			
			if (hd12ViewChildren == 0) {
				$.hd12View.add(describe[12]);
			}
		} else {
			if (hd12ViewChildren.length > 0) {
				for (var i = 0; i < hd12ViewChildren.length; i++) {
					$.hd12View.remove(hd12ViewChildren[i]);
				}
			}
		}
	});

}

function hd13Picker() {
	$.hd13.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd13.value = myArray[selectedIndex];

		var hd13ViewChildren = $.hd13View.getChildren();

		if ($.hd13.value == "Yes") {

			if (hd13ViewChildren == 0) {
				$.hd13View.add(describe[13]);
			}
		} else {
			if (hd13ViewChildren.length > 0) {
				for (var i = 0; i < hd13ViewChildren.length; i++) {
					$.hd13View.remove(hd13ViewChildren[i]);
				}
			}
		}
	});

}

function hd14Picker() {
	$.hd14.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd14.value = myArray[selectedIndex];

		var hd14ViewChildren = $.hd14View.getChildren();

		if ($.hd14.value == "Yes") {

			if (hd14ViewChildren == 0) {
				$.hd14View.add(describe[14]);
			}
		} else {
			if (hd14ViewChildren.length > 0) {
				for (var i = 0; i < hd14ViewChildren.length; i++) {
					$.hd14View.remove(hd14ViewChildren[i]);
				}
			}
		}
	});

}

function hd15Picker() {
	$.hd15.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd15.value = myArray[selectedIndex];

		var hd15ViewChildren = $.hd15View.getChildren();

		if ($.hd15.value == "Yes") {
	
			if (hd15ViewChildren == 0) {
				$.hd15View.add(describe[15]);
			}
		} else {
			if (hd15ViewChildren.length > 0) {
				for (var i = 0; i < hd15ViewChildren.length; i++) {
					$.hd15View.remove(hd15ViewChildren[i]);
				}
			}
		}
	});

}

function hd16Picker() {
	$.hd16.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd16.value = myArray[selectedIndex];

		var hd16ViewChildren = $.hd16View.getChildren();

		if ($.hd16.value == "Yes") {

			if (hd16ViewChildren == 0) {
				$.hd16View.add(describe[16]);
			}
		} else {
			if (hd16ViewChildren.length > 0) {
				for (var i = 0; i < hd16ViewChildren.length; i++) {
					$.hd16View.remove(hd16ViewChildren[i]);
				}
			}
		}
	});

}

function hd17Picker() {
	$.hd17.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd17.value = myArray[selectedIndex];

		var hd17ViewChildren = $.hd17View.getChildren();

		if ($.hd17.value == "Yes") {

			if (hd17ViewChildren == 0) {
				$.hd17View.add(describe[17]);
			}
		} else {
			if (hd17ViewChildren.length > 0) {
				for (var i = 0; i < hd17ViewChildren.length; i++) {
					$.hd17View.remove(hd17ViewChildren[i]);
				}
			}
		}
	});
}

function hd18Picker() {
	$.hd18.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event) {
		var selectedIndex = event.source.selectedIndex;
		$.hd18.value = myArray[selectedIndex];

		var hd18ViewChildren = $.hd18View.getChildren();

		if ($.hd18.value == "Yes") {
			
			if (hd18ViewChildren == 0) {
				$.hd18View.add(describe[18]);
			}
		} else {
			if (hd18ViewChildren.length > 0) {
				for (var i = 0; i < hd18ViewChildren.length; i++) {
					$.hd18View.remove(hd18ViewChildren[i]);
				}
			}
		}
	});

}

function blr(e) {
	$.hd1View.blur();
	$.hd2View.blur();
	$.hd3View.blur();
	$.hd4View.blur();
	$.hd5View.blur();
	$.hd6View.blur();
	$.hd7View.blur();
	$.hd8View.blur();
	$.hd9View.blur();
	$.hd10View.blur();
	$.hd11View.blur();
	$.hd12View.blur();
	$.hd13View.blur();
	$.hd14View.blur();
	$.hd15View.blur();
	$.hd16View.blur();
	$.hd17View.blur();
	$.hd18View.blur();
}

function goTo(e) {
	if ($.hd1.value == '' && $.hd1.required == 1) {
		alert("Question 1 is Required");
		$.hd1.focus();
		$.hd1.blur();
		$.hd1.setBorderColor('red');
		$.hd1.setBorderWidth(3);
		
	} else if ($.hd1View.getChildren().length > 0 && describe[1].value == '') {
			alert("The Description is Required");
			describe[1].focus();
			describe[1].setBorderColor('red');
			describe[1].setBorderWidth(3);
			
	} else if ($.hd2.value == '' && $.hd2.required == 1) {
		alert("Question 2 is Required");
		$.hd2.focus();
		$.hd2.blur();
		$.hd2.setBorderColor('red');
		$.hd2.setBorderWidth(3);

	} else if ($.hd2View.getChildren().length > 0 && describe[2].value == '') {
			alert("The Description is Required");
			describe[2].focus();
			describe[2].setBorderColor('red');
			describe[2].setBorderWidth(3);
			
	} else if ($.hd3.value == '' && $.hd3.required == 1) {
		alert("Question 3 is Required");
		$.hd3.focus();
		$.hd3.blur();
		$.hd3.setBorderColor('red');
		$.hd3.setBorderWidth(3);

	} else if ($.hd3View.getChildren().length > 0 && describe[3].value == '') {
			alert("The Description is Required");
			describe[3].focus();
			describe[3].setBorderColor('red');
			describe[3].setBorderWidth(3);
			
	} else if ($.hd4.value == '' && $.hd4.required == 1) {
		alert("Question 4 is Required");
		$.hd4.focus();
		$.hd4.blur();
		$.hd4.setBorderColor('red');
		$.hd4.setBorderWidth(3);

	} else if ($.hd4View.getChildren().length > 0 && describe[4].value == '') {
			alert("The Description is Required");
			describe[4].focus();
			describe[4].setBorderColor('red');
			describe[4].setBorderWidth(3);

	} else if ($.hd5.value == '' && $.hd5.required == 1) {
		alert("Question 5 is Required");
		$.hd5.focus();
		$.hd5.blur();
		$.hd5.setBorderColor('red');
		$.hd5.setBorderWidth(3);

	} else if ($.hd5View.getChildren().length > 0 && describe[5].value == '') {
			alert("The Description is Required");
			describe[5].focus();
			describe[5].setBorderColor('red');
			describe[5].setBorderWidth(3);

	} else if ($.hd6.value == '' && $.hd6.required == 1) {
		alert("Question 6 is Required");
		$.hd6.focus();
		$.hd6.blur();
		$.hd6.setBorderColor('red');
		$.hd6.setBorderWidth(3);

	} else if ($.hd6View.getChildren().length > 0 && describe[6].value == '') {
			alert("The Description is Required");
			describe[6].focus();
			describe[6].setBorderColor('red');
			describe[6].setBorderWidth(3);
		
	} else if ($.hd7.value == '' && $.hd7.required == 1) {
		alert("Question 7 is Required");
		$.hd7.focus();
		$.hd7.blur();
		$.hd7.setBorderColor('red');
		$.hd7.setBorderWidth(3);

	} else if ($.hd7View.getChildren().length > 0 && describe[7].value == '') {
			alert("The Description is Required");
			describe[7].focus();
			describe[7].setBorderColor('red');
			describe[7].setBorderWidth(3);
		
	} else if ($.hd8.value == '' && $.hd8.required == 1) {
		alert("Question 8 is Required");
		$.hd8.focus();
		$.hd8.blur();
		$.hd8.setBorderColor('red');
		$.hd8.setBorderWidth(3);

	} else if ($.hd8View.getChildren().length > 0 && describe[8].value == '') {
			alert("The Description is Required");
			describe[8].focus();
			describe[8].setBorderColor('red');
			describe[8].setBorderWidth(3);
	
	} else if ($.hd9.value == '' && $.hd9.required == 1) {
		alert("Question 9 is Required");
		$.hd9.focus();
		$.hd9.blur();
		$.hd9.setBorderColor('red');
		$.hd9.setBorderWidth(3);

	} else if ($.hd9View.getChildren().length > 0 && describe[9].value == '') {
			alert("The Description is Required");
			describe[9].focus();
			describe[9].setBorderColor('red');
			describe[9].setBorderWidth(3);
		
	} else if ($.hd10.value == '' && $.hd10.required == 1) {
		alert("Question 10 is Required");
		$.hd10.focus();
		$.hd10.blur();
		$.hd10.setBorderColor('red');
		$.hd10.setBorderWidth(3);

	} else if ($.hd10View.getChildren().length > 0 && describe[10].value == '') {
			alert("The Description is Required");
			describe[10].focus();
			describe[10].setBorderColor('red');
			describe[10].setBorderWidth(3);
		
	} else if ($.hd11.value == '' && $.hd11.required == 1) {
		alert("Question 11 is Required");
		$.hd11.focus();
		$.hd11.blur();
		$.hd11.setBorderColor('red');
		$.hd11.setBorderWidth(3);

	} else if ($.hd11View.getChildren().length > 0 && describe[11].value == '') {
			alert("The Description is Required");
			describe[11].focus();
			describe[11].setBorderColor('red');
			describe[11].setBorderWidth(3);
		
	} else if ($.hd12.value == '' && $.hd12.required == 1) {
		alert("Question 12 is Required");
		$.hd12.focus();
		$.hd12.blur();
		$.hd12.setBorderColor('red');
		$.hd12.setBorderWidth(3);

	} else if ($.hd12View.getChildren().length > 0 && describe[12].value == '') {
			alert("The Description is Required");
			describe[12].focus();
			describe[12].setBorderColor('red');
			describe[12].setBorderWidth(3);
		
	} else if ($.hd13.value == '' && $.hd13.required == 1) {
		alert("Question 13 is Required");
		$.hd13.focus();
		$.hd13.blur();
		$.hd13.setBorderColor('red');
		$.hd13.setBorderWidth(3);

	} else if ($.hd13View.getChildren().length > 0 && describe[13].value == '') {
			alert("The Description is Required");
			describe[13].focus();
			describe[13].setBorderColor('red');
			describe[13].setBorderWidth(3);
		
	} else if ($.hd14.value == '' && $.hd14.required == 1) {
		alert("Question 14 is Required");
		$.hd14.focus();
		$.hd14.blur();
		$.hd14.setBorderColor('red');
		$.hd14.setBorderWidth(3);

	} else if ($.hd14View.getChildren().length > 0 && describe[14].value == '') {
			alert("The Description is Required");
			describe[14].focus();
			describe[14].setBorderColor('red');
			describe[14].setBorderWidth(3);
		
	} else if ($.hd15.value == '' && $.hd15.required == 1) {
		alert("Question 15 is Required");
		$.hd15.focus();
		$.hd15.blur();
		$.hd15.setBorderColor('red');
		$.hd15.setBorderWidth(3);

	} else if ($.hd15View.getChildren().length > 0 && describe[15].value == '') {
			alert("The Description is Required");
			describe[15].focus();
			describe[15].setBorderColor('red');
			describe[15].setBorderWidth(3);
	
	} else if ($.hd16.value == '' && $.hd16.required == 1) {
		alert("Question 16 is Required");
		$.hd16.focus();
		$.hd16.blur();
		$.hd16.setBorderColor('red');
		$.hd16.setBorderWidth(3);

	} else if ($.hd16View.getChildren().length > 0 && describe[16].value == '') {
			alert("The Description is Required");
			describe[16].focus();
			describe[16].setBorderColor('red');
			describe[16].setBorderWidth(3);
		
	} else if ($.hd17.value == '' && $.hd17.required == 1) {
		alert("Question 17 is Required");
		$.hd17.focus();
		$.hd17.blur();
		$.hd17.setBorderColor('red');
		$.hd17.setBorderWidth(3);

	} else if ($.hd17View.getChildren().length > 0 && describe[17].value == '') {
			alert("The Description is Required");
			describe[17].focus();
			describe[17].setBorderColor('red');
			describe[17].setBorderWidth(3);
		
	} else if ($.hd18.value == '' && $.hd18.required == 1) {
		alert("Question 18 is Required");
		$.hd18.focus();
		$.hd18.blur();
		$.hd18.setBorderColor('red');
		$.hd18.setBorderWidth(3);

	} else if ($.hd18View.getChildren().length > 0 && describe[18].value == '') {
			alert("The Description is Required");
			describe[18].focus();
			describe[18].setBorderColor('red');
			describe[18].setBorderWidth(3);
			
	} else {
		
		var healthDeclarationParams = {
			Psychiartic : $.hd1.value,
			Epilepsy : $.hd2.value,
			Migraine : $.hd3.value,
			Hysteria : $.hd4.value,
			Allergic_Rhinitis : $.hd5.value,
			Asthma : $.hd6.value,
			Tuberculosis : $.hd7.value,
			Hypertension : $.hd8.value,
			Diabetes_Mellitus : $.hd9.value,
			Heart_Diseases : $.hd10.value,
			Thyroid_Disease : $.hd11.value,
			Kidney_Diseases : $.hd12.value,
			Gastric : $.hd13.value,
			HIV : $.hd14.value,
			cancer:$.hd15.value,
			Venereal_Diseases : $.hd16.value,
			Leukemia : $.hd17.value,
			Hepatitis : $.hd18.value,
		};

		var healthDeclarationDescParams = {
			Psychiartic_Desc : describe[1].value,
			Epilepsy_Desc : describe[2].value,
			Migraine_Desc : describe[3].value,
			Hysteria_Desc : describe[4].value,
			Allergic_Rhinitis_Desc : describe[5].value,
			Asthma_Desc : describe[6].value,
			Tuberculosis_Desc : describe[7].value,
			Hypertension_Desc : describe[8].value,
			Diabetes_Mellitus_Desc : describe[9].value,
			Heart_Diseases_Desc : describe[10].value,
			Thyroid_Disease_Desc : describe[11].value,
			Kidney_Diseases_Desc : describe[12].value,
			Gastric_Desc : describe[13].value,
			HIV_Desc : describe[14].value,
			cancer_Desc:describe[15].value,
			Venereal_Diseases_Desc : describe[16].value,
			Leukemia_Desc : describe[17].value,
			Hepatitis_Desc : describe[18].value
		};
		
		console.log(healthDeclarationParams);
		console.log(healthDeclarationDescParams);
		
		Alloy.createController('finalDeclaration').getView().open();

	}

}

$.healthDeclaration.open();
