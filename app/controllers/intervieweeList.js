var interviewee = [
    {IC: '1', name: 'Ahmad Hamdan'},
     {IC: '1', name: 'Mohammad Besher'},
     {IC: '1', name: 'Ali Omran'},
     {IC: '1', name: 'Interviewee 3'},
     {IC: '1', name: 'Interviewee 4'},
     {IC: '1', name: 'Interviewee 5'},
     {IC: '1', name: 'Interviewee 6'},
     {IC: '1', name: 'Interviewee 7'},
     {IC: '1', name: 'Interviewee 8'},
     {IC: '1', name: 'Interviewee 9'},
     {IC: '1', name: 'Interviewee 10'},
     {IC: '1', name: 'Interviewee 11'},
     {IC: '1', name: 'Interviewee 12'},
     {IC: '1', name: 'Interviewee 13'},
     {IC: '1', name: 'Interviewee 14'},
     {IC: '1', name: 'Interviewee 15'},
       
];

var data = [];

for(var i = 0; i < interviewee.length; i++){
	data.push({ 
        properties: {
            itemId: interviewee[i].IC,
            title: interviewee[i].name,
            //image: interviewee[i].photo,
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
            color: 'black',
            left:10
        }
   });
}
$.elementsList.sections[0].setItems(data);


$.elementsList.addEventListener('itemclick', function(e){
	var item = $.elementsList.sections[0].getItemAt(e.itemIndex);
	Alloy.createController('intervieweeDetails', [item.properties.itemId]).getView().open();
});

$.intervieweeList.open();
