/**
 * You've heard of the JavaScript Math library. Well, who needs that when you have Mathify!
 * Mathify is an object that contains numbers and simple arithmatic functions so you don't need to use
 * pesky operators.
 *
 * Create a Mathify object with keys 'one' through 'ten' that have values of their respective numbers.
 * Mathify should also have functions for add, subtract, divide and multiply. Each function should take
 * two parameters and return the result of the operation.
 */

 var Mathify = {
 	one: 1,
 	two: 2,
 	three: 3,
 	four: 4,
 	five: 5,
 	six: 6,
 	seven: 7,
 	eight: 8,
 	nine: 9,
 	ten: 10,
 	add: function (x, y) {
 		return x + y;
 	},
 	subtract: function(x, y) {
 		return x - y;
 	},
 	multiply: function(x, y) {
 		return x * y;
 	},
 	divide: function(x, y) {
 		return x / y;
 	}
 };

// Why do this?
console.log(1 + 2);

// When we can do this! ;)
console.log(Mathify.add(Mathify.one, Mathify.two));






























