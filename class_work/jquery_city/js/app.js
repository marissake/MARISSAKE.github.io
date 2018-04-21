// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


// $("#first").click(changeThumbFirst)
// $("#second").click(changeThumbSecond)
// $("#third").click(changeThumbThird)
// $("#fourth").click(changeThumbFourth)

// function changeThumbFirst() {

// 	$("#bigimage").attr("src", "img/1.jpg");
// }

// function changeThumbSecond() {
// 	$("#bigimage").attr("src", "img/2.jpg");
// }

// function changeThumbThird() {
// 	$("#bigimage").attr("src", "img/3.jpg");
// }

// function changeThumbFourth() {
// 	$("#bigimage").attr("src", "img/4.jpg");
// }


function change(event) {
	var newSource = $(event.currentTarget).attr("src");
	$("#bigimage").attr("src", newSource);

}

$(".thumb").mouseover(change);
