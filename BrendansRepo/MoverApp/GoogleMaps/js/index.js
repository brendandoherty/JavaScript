// MODEL

var uhaul = ['2215 5th St NE Washington DC', '3378 Stephenson St NW', '4201 Massachusettes Ave NW'];



/// Google Maps Variables
var geocoder, address1, address2;
var map;
var service = new google.maps.DistanceMatrixService();

// VIEW
 function setup(){
 	var directionsService = new google.maps.DirectionsService;
 	var directionsDisplay = new google.maps.DirectionsRenderer;
 	var latlng = new google.maps.LatLng(38.907280, -77.036892);
     var mapOptions = {
         zoom: 12,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     map = new google.maps.Map(document.getElementById("map"), mapOptions);
     directionsDisplay.setMap(map);

     document.getElementById('submit').addEventListener('click', function() {
      calcRoute(directionsService, directionsDisplay);
     });
 }

// CONTROLLER


// plot the start and end addresses on a map with the route drawn between them
function calcRoute(directionsService, directionsDisplay) {
	var start = document.getElementById('address1').value;
	var end = document.getElementById('address2').value;
  var waypts = [];

  waypts.push({
    location: uhaul[0],
    stopover: true
  });

	directionsService.route({
    origin: start,
    destination: end,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
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
        document.getElementById('originList').innerHTML = origins;
      }
    }
  }
}




 
