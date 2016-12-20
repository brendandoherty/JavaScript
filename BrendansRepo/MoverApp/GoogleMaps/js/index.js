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

  var request = {
    origin: start,
    destination: end,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }

	directionsService.route(request, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
      calcDistance(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

// calculate and display the distance in miles between the two addresses 

function calcDistance(result) {
  var totalDist = 0;
  var myRoute = result.routes[0];
  var legDist = '';


  for (var i = 0; i < myRoute.legs.length; i++) {
    totalDist += myRoute.legs[i].distance.value;
    legDist += myRoute.legs[i].distance.text;
  }

  totalDist = Number(totalDist * 0.000621371192).toFixed(2);

  document.getElementById("results").innerHTML = totalDist + " miles"
  document.getElementById("summary").innerHTML = "Distance: " + legDist;
}





 
