var total = 0;

// +10

var plusTen = $("#a10");

plusTen.click(addTen);

function addTen() {
	total = total + 10;

	$("#out").html(total);
}




// +20

var plusTwenty = $("#a20");

plusTwenty.click(addTwenty);

function addTwenty() {
	total = total + 20;

	$("#out").html(total);
}

// +30

var plusThirtyButton = $("#a30");

plusThirtyButton.onclick = addThirty;

function addThirty() {
	total = total + 30;

	$("#out").innerHTML = total;
}

// -10

var minusTenButton = $("#n10");

minusTenButton.onclick = subtractTen;

function subtractTen() {
	total = total - 10;

	$("#out").innerHTML = total;
}


// -20

var minusTwentyButton = $("#n20");

minusTwentyButton.onclick = subtractTwenty;

function subtractTwenty() {
	total = total - 20;

	$("#out").innerHTML = total;
}

// -30

var minusThirtyButton = $("#n30");

minusThirtyButton.onclick = subtractThirty;

function subtractThirty() {
	total = total - 30;

	$("#out").innerHTML = total;
}

// red

var redButton = $("#red");

redButton.onclick = turnRed;

function turnRed() {
	$("#out").style.background = "red";
}

// blue

var blueButton = $("#blue");

blueButton.onclick = turnBlue;

function turnBlue() {
	$("#out").style.background = "blue";
}

// reset

var outputButton = $("#out");

outputButton.onclick = reset;

function reset() {
	total = 0;

	$("#out").innerHTML = total;
	$("#out").style.background = "white";
}
