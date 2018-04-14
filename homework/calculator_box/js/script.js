
//variables

var zeroBox = document.querySelector("#out");
var add10box = document.querySelector("#a10");
var redBox = document.querySelector("#red");
var blueBox = document.querySelector("#blue");
var add20box = document.querySelector("#a20");
var add30box = document.querySelector("#a30");
var minus10box = document.querySelector("#n10");
var minus20box = document.querySelector("#n20");
var minus30box = document.querySelector("#n30");

//functions

function turnRed() {
	zeroBox.style.backgroundColor = "red";
}
	
function turnBlue() { 
	zeroBox.style.backgroundColor = "blue";
}

function reset() {
	zeroBox.style.backgroundColor = "white";
	document.querySelector("#out").innerHTML = 0;
}

function add10() {
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer + 10;
}

function add20() {
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer + 20;
}

function add30() {
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer + 30;
}

function minus10() {
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer - 10;
}

function minus20() {
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer - 20;
}

function minus30() {
	var integer = parseInt(document.querySelector("#out").innerHTML, 10);
	zeroBox.innerHTML = integer - 30;
}

//click events
redBox.onclick = turnRed;
blueBox.onclick = turnBlue;
zeroBox.onclick = reset;
add10box.onclick = add10;
add20box.onclick = add20;
add30box.onclick = add30;
minus10box.onclick = minus10;
minus20box.onclick = minus20;
minus30box.onclick = minus30;