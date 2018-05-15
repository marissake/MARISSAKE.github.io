// As a User
// When I view the site
// I see a map
// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 40.730610, lng: -73.935242},
//           zoom: 11

//         });
//       }


function initMap() {

        var nyc = {lat: 40.730610, lng: -73.935242};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: nyc

      
          
        });

        var marker = new google.maps.Marker({
          position: nyc,
          map: map
        });



      }

      
// As a User

// When I view the site
// I expect to only see NYC

// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc