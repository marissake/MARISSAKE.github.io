

// As a User
// When I visit the site
// I expect to see the names of the all the stations

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only
 // use filter iterator 
// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

$.ajax({
  type: 'GET',
  url: 'https://api.citybik.es/citi-bike-nyc.json',
  success: function(stations) {
    console.log(stations)

//firstpart
var firstfifty = stations.slice(0, 50);
    firstfifty.forEach(logstations);

function logstations(stations) {

	var stationnames = (stations.name);

	$(".allbikes").after("<ul><li>" + stationnames + "</li></ul>");

}

//secondpart
var filteredstations = stations.filter(logfreebikes);
filteredstations.forEach(logfreestations);

function logfreebikes(stations) {
	
	return (stations.free > 0);
}

function logfreestations (stations) {
  var stationnames = (stations.name);
  $("#emptybikes h2").after("<ul><li>" + stationnames + "</li></ul>")
}
// var freebikes = stations.free
// freebikes.filter(parseFreeBikes);
// function parseFreeBikes(free) {
// 	return free>0;
// }


//filter(make) new array of object with free value greater than zero
//from that array, for each, log station name
  },
});







	


