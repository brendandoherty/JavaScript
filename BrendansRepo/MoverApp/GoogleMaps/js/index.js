// MODEL

var uhaul = ['2215 5th St NE Washington DC', '26 K St NE Washington DC', '1501 S Capitol St SW Washington DC', '6889 New Hampshire Ave, Takoma Park, MD'];



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
  var moveOut = document.getElementById('address1').value;
	var moveIn = document.getElementById('address2').value;
  var bestUhaul = uhaul[0];

  var request = {
    origin: bestUhaul,
    destination: bestUhaul,
    waypoints: [{location: moveOut}, {location: moveIn}],
    optimizeWaypoints: false,
    provideRouteAlternatives: true,
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
  var legDist = result.routes[0].legs[0].distance.value;

  for (var i = 0; i < myRoute.legs.length; i++) {
    totalDist += myRoute.legs[i].distance.value;
  }

  totalDist = Number(totalDist * 0.000621371192).toFixed(2);
  firstLegDist = Number(legDist * 0.000621371192).toFixed(2);

  document.getElementById("results").innerHTML = totalDist + " miles"
  document.getElementById("summary").innerHTML = "Distance: " + firstLegDist + " miles";
}





 
