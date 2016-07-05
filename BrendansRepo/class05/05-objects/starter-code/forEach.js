/**
 * Convert the following `for` loop to a `forEach` loop.
 */

 var planets = [
   {
     name: 'Mercury',
     distance: 36
   },
   {
     name: 'Venus',
     distance: 67.2
   },
   {
     name: 'Earth',
     distance: 93
   },
   {
     name: 'Mars',
     distance: 141.6
   },
   {
     name: 'Jupiter',
     distance: 483.6
   },
   {
     name: 'Saturn',
     distance: 886.7
   },
   {
     name: 'Uranus',
     distance: 1784
   },
   {
     name: 'Neptune',
     distance: 2794
   },
   {
     name: 'Planet 9',
     distance: 18590
   }
 ];

 for (var i = 0; i < planets.length; i++) {
   var planet = planets[i];
   var message = planet.name + ' is ' + planet.distance + ' million miles from the sun.';
   console.log(message);
 }
