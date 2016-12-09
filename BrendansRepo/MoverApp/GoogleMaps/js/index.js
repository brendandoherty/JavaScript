// MODEL

var geocoder;
var map;

// VIEW
 function setup(){
 	geocoder = new google.maps.Geocoder();
 	var latlng = new google.maps.LatLng(38.907280, -77.036892);
     var mapOptions = {
         zoom: 12,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     map = new google.maps.Map(document.getElementById("map"), mapOptions);
 }

// CONTROLLER

function codeAddress() {
	var address = document.getElementById('address').value;

	geocoder.geocode({'address' : address}, function(results, status) {
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



 
