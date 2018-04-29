// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

//parseint if you need to

//run submit function on enter
$("#entry").submit(addTotal);
//bill total starts at 0
var billtotal = 0

function addTotal(event) {
	event.preventDefault();
	//get value of new register entry
	var newEntry = $("#newEntry").val();
	//get decimal value of new entry
	newEntry = parseFloat(newEntry);
	//limit to two decimal places
	dollars = '$' + newEntry.toFixed(2);
	console.log(dollars);
	//place register entry into new row
	var newItem = "<tr><td></td><td>" + dollars + "</td></tr>";
	$("#entries").append(newItem);
//calculate new total of bill and limit to 2 decimal places
	billtotal = billtotal + newEntry;
	$("#total").html(billtotal.toFixed(2));
	//empty input field
	$('#newEntry').val("");
}


  
