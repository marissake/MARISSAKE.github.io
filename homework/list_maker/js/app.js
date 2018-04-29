// As a user
// When I enter an item in the input and click the button
// I expect to see a new item in the list

// As a user
// Once I have added an item to the list
// I expect the input to be empty

// Bonus:

// As a user
// Once I have added an item to the list
// I expect the prompt to be focused on the input

// Harder Bonus:

// As a user
// When I try to add a blank item
// I expect to see an alert telling me to add an item

// Legendary Bonus:

// As a user
// When I click on an item I have already added
// I expect it to be removed from the list

$("#clickme").click(function addItem() {
	//get value of new list item
	var input = $("#item").val();

//if no input, alert 'add item'
//otherwise add a new list item to the #list

	if (input.length>0) {
		var output = "<li>" + input + "</li>";
		$("#list").append(output);
		//return input field to empty
		$("#item").val("");
		//focus on input again
		$("#item").focus()
	} else {
		alert("Please add an item!");
}
//remove item if clicked on
	$("li").click(function removeItem(event) {
	var currentItem = $(event.currentTarget);
	console.log(event.currentTarget);
	$(currentItem).remove();
	
});
});





