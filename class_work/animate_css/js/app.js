// As a User
// When I click on the button
// I want the header to bounce

$("#animate-me").click(bounceHello);

function bounceHello(){
	$(".bounce").addClass("animated infinite");

	var right = $("img").css("right");
	if right == "0px" {
		right: 273
	} else {
	$("img").animate({
		right: 0,
	})
}}

$("#shrink").click(shrinkGlobe);
function shrinkGlobe(){
	$("img").animate({
    'width': '50px',
    'height': '50px',
  }, 2000)
}

// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button

// As a User
// When I click the button
// I want to see the globe move to the right of the screen

// As a User
// When I click the button again
// I want the globe to return