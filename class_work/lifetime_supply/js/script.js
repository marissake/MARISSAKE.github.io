// 1. Inside of the calculateDrinks function, use document.querySelector()
// and the .value method to store inputs from the following elements into variables:
//
// #current-age
// #max-age
// #fav-drink
// #num-per-day
//
// ex: var currentAge = document.querySelector('#current-age').value

// 2. Then, still inside of the calculateDrinks function, create a variable, drinksLeft,
// which represents the result of your (maxAge - currentAge) * 365 * numPerDay

// 3. Lastly, output the correct values for the user

function calculateDrinks() {
  // 1. Store inputs as variables here:
  var currentAge = document.querySelector("#current-age").value;
  var maxAge = document.querySelector("#max-age").value;
  var faveDrink = document.querySelector("#fav-drink").value;
  var numOfDrinks = document.querySelector("#num-per-day").value;

  // 2. Calculate drinksLeft
  var yearsLeft = maxAge - currentAge;
  var daysLeft = yearsLeft * 365;
  var drinksLeft = daysLeft * numOfDrinks;

document.querySelector('#total-num-of-drinks-output').innerHTML = drinksLeft;
  document.querySelector('#drink-output').innerHTML = faveDrink;

 

  // 3. Output result for user to see:

}


document.querySelector('#click-me').onclick = calculateDrinks;


