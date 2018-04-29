// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

$('#city-type').change(changePicture);

function changePicture() {
	var cityChoice = $('#city-type').val();
	console.log(cityChoice);
		if (cityChoice === "atx") {
			$("body").removeClass();
		$("body").addClass("atx");
	} else if (cityChoice === "nyc") {
		$("body").removeClass();
		$("body").addClass("nyc")
	} else if (cityChoice === "sf") {
		$("body").removeClass();
		$("body").addClass("sf")
	} else if (cityChoice === "la") {
		$("body").removeClass();
		$("body").addClass("la")
	} else if (cityChoice === "syd") {
		$("body").removeClass();
		$("body").addClass("syd")
	}
}
	