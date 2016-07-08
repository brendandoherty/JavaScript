/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

 var myArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

 function countdown(arr, func) {
 	for (i = 0; i < arr.length; i++)
 		console.log(arr[i]);
 	if (i <= arr.length) {
 		console.log('Blast Off');
 	};
 };

 countdown(myArray, console.log);




/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

 function max(x, y) {
 	if (x > y)
 		console.log(x)
 	if (x <= y)
 		console.log(y)
 }

 max(1, 8);


/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */
 var myFirstarray = [1, 2, 3, 4, 5]
 var mySecondarray = [18, 19, 20, 21, 22, 23, 24, 25]

 function longer(x, y) {
 	if (x.length > y.length)
 		console.log(myFirstarray)
 	if (x.length <= y.length)
 		console.log(mySecondarray)
 }

longer(myFirstarray, mySecondarray);


/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
 function isEven(num) {
 	if (num % 2 === 0)
 		console.log(num + ' is an even number')
 	if (num % 2 > 0)
 		console.log(num + ' is an odd number')
 }

 isEven(9);


 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

  function getAreaOfCircle(radius) {
  	console.log(Math.PI * Math.pow(radius, 2));
  }

  getAreaOfCircle(5);




/**
 * Q5: Write a function called `getFullName` that has an Object parameter, of the form:
 *
 * {
 *   firstName: 'Bob',
 *   lastName: 'Evans'
 * }
 *
 * And returns the first and last name concatenated together (i.e. 'Bob Evans').
 */
 var name = {
 	firstName: 'Bob',
 	lastName: 'Evans'
 }

function getFullName(x) {
	console.log(name.firstName + ' ' + name.lastName);
}
getFullName(name)
/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

 var bee = "bee like me"

 function reverseString(x) {
 	var answer = [x.split];
 	var newAnswer = answer.reverse();
 	console.log(newAnswer);
 }

reverseString(bee);

/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

 var numberList = [1, 2, 3, 4, 5, 85, 6, 7, 99, 2, 5, 8]

 function maxArray(array) {
 	console.log(Math.max.apply(Math, array));
 };

maxArray(numberList);

/**
 * Q8: Create an Object that has each of the above functions as values.
 *
 * var answers = {
 *   q0: ?,
 *   ...
 * };
 *
 */

 var master = {
 	q0: countdown(),
 	q1: max(),
 	q2: longer(),
 	q3: isEven(),
 	q4: getAreaOfCircle(),
 	q5: getFullName(),
 	q6: reverseString(),
 	q7: maxArray()
 }

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
console.log(call(master));


