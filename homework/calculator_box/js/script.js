
//commonly used variables
var integer = parseInt(document.querySelector("#out").innerHTML, 10);
var zeroBox = document.querySelector("#out");

//list of functions

function turnRed() {
	var redBox = document.querySelector("#red");
	zeroBox.style.backgroundColor = "red";
}
	
function turnBlue() {
	// var blueBox = document.querySelector("#blue"); //why won't the onclick accept my bluebox variable?
	zeroBox.style.backgroundColor = "blue";
}

function reset() {
	zeroBox.style.backgroundColor = "white";
	document.querySelector("#out").innerHTML = 0;
}

function add10() {
	var add10box = document.querySelector("#a10");
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer + 10;
}

function add20() {
	var add20box = document.querySelector("#a20");
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer + 20;
}

function add30() {
	var add30box = document.querySelector("#a30");
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer + 30;
}

function minus10() {
	var minus10box = document.querySelector("#n10");
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer - 10;
}

function minus20() {
	var minus20box = document.querySelector("#n20");
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer - 20;
}

function minus30() {
	var minus20box = document.querySelector("#n30");
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer - 30;
}

//click events
document.querySelector("#red").onclick = turnRed;
document.querySelector("#blue").onclick = turnBlue;
document.querySelector("#out").onclick = reset;
document.querySelector("#a10").onclick = add10; //why won't the onclick accept my add10box variable(above)?
document.querySelector("#a20").onclick = add20;
document.querySelector("#a30").onclick = add30;
document.querySelector("#n10").onclick = minus10;
document.querySelector("#n20").onclick = minus20;
document.querySelector("#n30").onclick = minus30;