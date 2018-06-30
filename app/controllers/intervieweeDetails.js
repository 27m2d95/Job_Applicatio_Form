var args = $.args[0];
$.intervieweeDetails.open();

var myArray = ['Sketch-Pad', 'Typing'];

var opts = {
	cancel : 2,
	options : myArray,
	destructive : 0,
	title:'Please Choose the Evaluation Type',
};

var dialog;

function starttEvaluation(e){
	dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	dialog.addEventListener('click', function(event){
		var selectedIndex = event.source.selectedIndex;
		var val  = myArray[selectedIndex];
		if(val == 'Typing'){
			Alloy.createController('interviewPortion').getView().open();
		}else if(val == 'Sketch-Pad'){
			Alloy.createController('scetchPad').getView().open();
		}
	});
	
	
}
