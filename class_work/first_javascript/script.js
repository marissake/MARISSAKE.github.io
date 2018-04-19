// var title = document.querySelector("#title");


function changeColor() {
  
  var red = document.querySelector("#red").value;
  var green = document.querySelector("#green").value;
  var blue = document.querySelector("#blue").value;

  var colorStr = "rgb(" + red + ", " + green + ", " + blue + ")";

  document.querySelector("#colorful-text").innerHTML = colorStr;
  document.querySelector("#wrapper").style.background = colorStr;

}


var button = document.querySelector("#color-button");

button.onclick = changeColor;
