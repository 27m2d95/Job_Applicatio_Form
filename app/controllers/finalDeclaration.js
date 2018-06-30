var surveyDeclirationParams = {
	Job_Challenge : 0,
	Job_Location : 0,
	Suitability_for_Job : 0,
	Salary : 0,
	Workload : 0,
	Compensation_Benifits : 0,
	Career_Oppourtunities : 0,
	Interested : 0
};

var c = 0;

function s1Check(e) {
	if (surveyDeclirationParams.Job_Challenge == 0) {
		surveyDeclirationParams.Job_Challenge = 1;
		$.s1.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Job_Challenge = 0;
		$.s1.setBackgroundImage('');
		c--;
	}
}

function s2Check(e) {
	if (surveyDeclirationParams.Job_Location == 0) {
		surveyDeclirationParams.Job_Location = 1;
		$.s2.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Job_Location = 0;
		$.s2.setBackgroundImage('');
		c--;
	}
}

function s3Check(e) {
	if (surveyDeclirationParams.Suitability_for_Job == 0) {
		surveyDeclirationParams.Suitability_for_Job = 1;
		$.s3.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Suitability_for_Job = 0;
		$.s3.setBackgroundImage('');
		c--;
	}
}

function s4Check(e) {
	if (surveyDeclirationParams.Salary == 0) {
		surveyDeclirationParams.Salary = 1;
		$.s4.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Salary = 0;
		$.s4.setBackgroundImage('');
		c--;
	}
}

function s5Check(e) {
	if (surveyDeclirationParams.Workload == 0) {
		surveyDeclirationParams.Workload = 1;
		$.s5.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Workload = 0;
		$.s5.setBackgroundImage('');
		c--;
	}
}

function s6Check(e) {
	if (surveyDeclirationParams.Compensation_Benifits == 0) {
		surveyDeclirationParams.Compensation_Benifits = 1;
		$.s6.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Compensation_Benifits = 0;
		$.s6.setBackgroundImage('');
		c--;
	}
}

function s7Check(e) {
	if (surveyDeclirationParams.Career_Oppourtunities == 0) {
		surveyDeclirationParams.Career_Oppourtunities = 1;
		$.s7.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Career_Oppourtunities = 0;
		$.s7.setBackgroundImage('');
		c--;
	}
}

function s8Check(e) {
	if (surveyDeclirationParams.Interested == 0) {
		surveyDeclirationParams.Interested = 1;
		$.s8.setBackgroundImage('/images/check.png');
		c++;
	} else {
		surveyDeclirationParams.Interested = 0;
		$.s8.setBackgroundImage('');
		c--;
	}
}

function goTo(e) {
	if (c < 3) {
		alert('At Least 3 Factors must be Chosen');

	} else {
		var dialog = Ti.UI.createAlertDialog({
			cancel : 1,
			ok : 0,
			buttonNames : ['Confirm', 'Cancel'],
			message : 'I hereby declare all the information given by me is true to the best knowladge. I understand that any misrepresentation or omission of facts will be sufficient for dismissal without compensation to the company if I have been employed.',
			title : 'Declaration'
		});

		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.ok) {
				console.log(surveyDeclirationParams);
				//call api
			}
		});
		dialog.show();

	}

}

$.finalDeclaration.open();

