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

// Instead of this
for (var i = 0; i < planets.length; i++) {
 var planet = planets[i];
 var message = planet.name + ' is ' + planet.distance + ' million miles from the sun.';
 console.log(message);
}

// -------------------------------

// We can make a generic forEach function
function forEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

// And a function for logging a single planet
function logPlanetInfo(planet) {
  var message = planet.name + ' is ' + planet.distance + ' million miles from the sun.';
  console.log(message);
}

// And then call forEach, passing it the planets and the logInfoFunction
forEach(planets, logInfoFunction);

// -------------------------------

// We could also make the logInfoFunction an anonymous function argument
forEach(planets, function (planet) {
  var message = planet.name + ' is ' + planet.distance + ' million miles from the sun.';
  console.log(message);
});

// -------------------------------

// As it happens, every Array actually has a forEach function built in, so we
// don't have to write our own.
planets.forEach(function (planet) {
  var message = planet.name + ' is ' + planet.distance + ' million miles from the sun.';
  console.log(message);
});



