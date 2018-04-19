

//converts temp to F or C based on which drop down item was chosen
function convertTemp() {

	var currentTemp = $("#current-temp").val()

	var tempToFahrenheit = currentTemp * 1.8 + 32;
	var tempToCelsius = currentTemp - 32 * (5/9);

	if($("#dropdown").html() == "Fahrenheit") {
		fahrenheitIt() 
	}

	else {
		celsiusIt()
	}
}

function fahrenheitIt() {
	// $("#current-temp").val() = currentTemp;
	var tempToFahrenheit = currentTemp * 1.8 + 32;
	$("#converted-temp").html(tempToFahrenheit);
}

function celsiusIt() {
	// $("#current-temp").val() = currentTemp;
	var tempTocelsius = currentTemp * 1.8 + 32;
	$("#converted-temp").html(tempToCelsius);
}

//inserts calculated value into html
	

}

//on button click, run function convertTemp
$("#button").click(convertTemp);
