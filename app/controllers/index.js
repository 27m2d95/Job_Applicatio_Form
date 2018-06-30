function interviewee(e) {
	Alloy.createController('firstInfoPage').getView().open();	
}

function interviewer(e) {

	var textfield = Ti.UI.createTextField({
		hintText : 'Enter the Access Key',
		passwordMask : true,
		textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
	});

	var dialog = Ti.UI.createAlertDialog({
		title : 'Access Key',
		buttonNames : ['OK', 'Cancel'],
		ok : 0,
		androidView : textfield,
	});
	dialog.addEventListener('click', function(e) {
		if (e.index === e.source.ok) {
			if (textfield.value == 'asp') {
				Alloy.createController('intervieweeList').getView().open();
				//Alloy.createController('scetchPad').getView().open();
			} else {
				alert('Wrong Access Key');
			}
		}
	});
	dialog.show();
}

$.index.open();
