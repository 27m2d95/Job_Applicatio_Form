var bool = false;


function datePicker(e) {
	$.interviewDate.blur();
	var datePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
	});
	datePicker.showDatePickerDialog({
		callback : function(e) {
			if (!e.cancel) {
				var dateValue = e.value;
				$.interviewDate.value = dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear();
				$.interviewDate.blur();
			}
		}
	});
}

function workDatePicker(e) {
	$.workDate.blur();
	var datePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
	});
	datePicker.showDatePickerDialog({
		callback : function(e) {
			if (!e.cancel) {
				var dateValue = e.value;
				$.workDate.value = dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear();
				$.workDate.blur();
			}
		}
	});
}

function timePicker(e) {
	$.interviewTime.blur();
	var timePicker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_TIME,
	});
	timePicker.showTimePickerDialog({
		callback : function(e) {
			if (!e.cancel) {
				var timeValue = e.value;
				$.interviewTime.value = timeValue.getHours() + ':' + timeValue.getMinutes();
				$.interviewTime.blur();

			}
		}
	});
}

function goToPersonalInfo(e) {
	// if ($.name.value == '' && $.name.required == 1) {
		// alert("Name is Required");
		// $.name.focus();
		// $.name.setBorderColor('red');
		// $.name.setBorderWidth(1);
// 
	// } else if ($.ICNumber.value == '' && $.ICNumber.required == 1) {
		// alert("IC Number is Required");
		// $.ICNumber.focus();
		// $.ICNumber.setBorderColor('red');
		// $.ICNumber.setBorderWidth(1);
// 
	// } else if ($.interviewDate.value == '' && $.interviewDate.required == 1) {
		// alert("interview Date is Required");
		// $.interviewDate.focus();
		// $.interviewDate.setBorderColor('red');
		// $.interviewDate.setBorderWidth(1);
// 
	// } else if ($.interviewTime.value == '' && $.interviewTime.required == 1) {
		// alert("interview Time is Required");
		// $.interviewTime.focus();
		// $.interviewTime.setBorderColor('red');
		// $.interviewTime.setBorderWidth(1);
// 
	// } else if ($.positionApplied.value == '' && $.positionApplied.required == 1) {
		// alert("position Applied is Required");
		// $.positionApplied.focus();
		// $.positionApplied.setBorderColor('red');
		// $.positionApplied.setBorderWidth(1);
// 
	// } else if ($.expectedSalary.value == '' && $.expectedSalary.required == 1) {
		// alert("expected Salary is Required");
		// $.expectedSalary.focus();
		// $.expectedSalary.setBorderColor('red');
		// $.expectedSalary.setBorderWidth(1);
// 
	// } else if ($.workDate.value == '' && $.workDate.required == 1) {
		// alert("work Date is Required");
		// $.workDate.focus();
		// $.workDate.setBorderColor('red');
		// $.workDate.setBorderWidth(1);
// 
	// } else if ($.companyLoc.value == '' && $.companyLoc.required == 1) {
		// alert("Company Location is Required");
		// $.companyLoc.focus();
		// $.companyLoc.setBorderColor('red');
		// $.companyLoc.setBorderWidth(1);
// 
	// } else if(bool == false){
		//alert('Please upload a personal picture');
		
		
	//}else {
		// var generalInfoParams = {
			// name : $.name.value,
			// ICNumber : $.ICNumber.value,
			// interviewDate : $.interviewDate.value,
			// interviewTime : $.interviewTime.value,
			// positionApplied : $.positionApplied.value,
			// expectedSalary : $.expectedSalary.value,
			// workDate : $.workDate.value,
			// companyLoc : $.companyLoc.value,
		// };
		// console.log(generalInfoParams);

		//send data call api
		//open next new view
		Alloy.createController('personalInfo').getView().open();
		

		//Alloy.createController('workingExperience').getView().open();

	//}

}

var myArray = ['KL', 'Penang'];

var opts = {
	cancel : 2,
	options : myArray,
	destructive : 0,
};

var dialog;
function locationPicker() {
	$.companyLoc.blur();
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', onSelectDialog);
}

function onSelectDialog(event) {
	var selectedIndex = event.source.selectedIndex;
	$.companyLoc.value = myArray[selectedIndex];
}

function blr(e) {
	$.interviewDate.blur();
	$.companyLoc.blur();
	$.interviewTime.blur();
	$.workDate.blur();
}

function showCamera (type, callback) {
    var camera = function () {
        Ti.Media.showCamera({
            success: function (e) {
                callback(null, e);
            },
            cancel: function (e) {
                callback(e, null);
            },
            error: function (e) {
                callback(e, null);
            },
            saveToPhotoGallery: true,
            mediaTypes: [ type ]
        });
    };
 
    if (!Ti.Media.hasCameraPermissions()) {
 
        Ti.Media.requestCameraPermissions(function (e) {
 
           
            if (e.success) {
                camera();
            } else {
                callback(new Error('could not obtain camera permissions!'), null);
            }
        });
    } else {
        camera();
    }
}

function takePic(){
	 showCamera(Ti.Media.MEDIA_TYPE_PHOTO, function (error, result) {
        if (error) {
            alert('could not take photo');
            return;
        }

        if (result.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            var imageView = Ti.UI.createImageView({
                image: result.media
            });
            
            var arr = $.hala.getChildren();
            
            if(arr.length > 0){
            	for(var i =0; i<arr.length; i++){
            	$.hala.remove(arr[arr.length - 1]);
            	}
            }
            
            $.hala.add(imageView);
            
            bool = true;
            
            
        }
    });
	
}



$.firstInfoPage.open();
