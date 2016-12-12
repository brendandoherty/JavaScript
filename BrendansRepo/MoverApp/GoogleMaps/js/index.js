// MODEL

var geocoder, address1, address2;
var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var service = new google.maps.DistanceMatrixService();

// VIEW
 function setup(){
 	geocoder = new google.maps.Geocoder();
 	directionsDisplay = new google.maps.DirectionsRenderer();
 	var latlng = new google.maps.LatLng(38.907280, -77.036892);
     var mapOptions = {
         zoom: 12,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     map = new google.maps.Map(document.getElementById("map"), mapOptions);
     directionsDisplay.setMap(map);
 }

// CONTROLLER


// plot the start and end addresses on a map with the route drawn between tem
function calcRoute() {
	var start = document.getElementById('address1').value;
	var end = document.getElementById('address2').value;

	var request = {
		origin: start,
		destination: end,
		travelMode: 'DRIVING'
	};
	directionsService.route(request, function(result, status) {
		if (status == 'OK') {
			directionsDisplay.setDirections(result);
		}
	});
	calculateDistance();
}

// calculate and display the distance in miles between the two addresses 
function calculateDistance() {
	var start = document.getElementById('address1').value;
	var end = document.getElementById('address2').value;

	service.getDistanceMatrix(
	{
		origins: [start],
		destinations: [end],
		travelMode: 'DRIVING',
		unitSystem: google.maps.UnitSystem.IMPERIAL
	}, renderDistance);
};

function renderDistance(response, status) {
  if (status == 'OK') {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];

        document.getElementById('results').innerHTML = distance;
      }
    }
  }
}



 
