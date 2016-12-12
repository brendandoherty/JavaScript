var originStreetNum = $('input[id="originStreetNum"]').val();
var originStreetName = $('input[id="originStreetName"]').val();
var originStreetType = $('input[id="originStreetType"]').val();
var originCity = $('input[id="originCity"]').val();
var originState = $('input[id="originState"]').val();

var destinationStreetNum = $('input[id="destinationStreetNum"]').val();
var destinationStreetName = $('input[id="destinationStreetName"]').val();
var destinationStreetType = $('input[id="destinationStreetType"]').val();
var destinationCity = $('input[id="destinationCity"]').val();
var destinationState = $('input[id="destinationState"]').val();

var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
url += originStreetNum + '+' + originStreetName + '+' + originStreetType + '+' + originCity + '+' + originState + '&destinations=';
url += destinationStreetNum + '+' + destinationStreetName + '+' + destinationStreetType + '+' + destinationCity + '+' + destinationState;
url += '&key=AIzaSyCgiwtC_K-CKQ5qGkUBHCyuL4LdsrPAkDQ'

$.get(url, function(data) {
  model.origin_addresses = data.origin_addresses;
  model.destination_addresses = data.destination_addresses;
  model.distance = data.rows.distance.text;
})



// Below is the code for just plotting two points on a google map, but this is not necessary when using the directions library to determine directions b/w two locations

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
function codeAddress() {
	var address1 = document.getElementById('address1').value;
	var address2 = document.getElementById('address2').value;

	geocoder.geocode({'address' : address1}, function(results, status) {
		if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

    geocoder.geocode({'address' : address2}, function(results, status) {
		if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

}