/**
 * Q0: Write a function called `countdown` that counts down from 10 on the console and
 * then logs "Blast Off!"
 */

 function countdown() {
 	for (var i = 10; i >0; i--) {
 		console.log(i);
 	}
 	console.log('Blast Off!');
 }






/**
 * Q1: Write a function called `max` that has two Number parameters and returns
 * the larger of the two.
 */

 function max(x, y) {
 	if (x > y) {
 		return x;
 	} else {
 		return y;
 	}	
 }

/**
 * Q2: Write a function called `longer` that has two String parameters and returns
 * the String that is longer.
 */

 function longer(x, y) {
 	if (x.length > y.length) {
 		return x;
 	} else {
 		return y;
 	}
 }



/**
 * Q3: Write a function called `isEven` that has one Number parameter and returns `true` if
 * if the number is even and `false` otherwise.
 */
 function isEven(num) {
 	if (num % 2 === 0) {
 		return true;
 	}
 	return false;
 } /// you don't have to add an else statement in the above case b/c we used return. Return stops executing a function whenever it is used. ///

 /**
  * Q4: Write a function called `getAreaOfCircle` that has a Number parameter
  * (the circle's radius) and returns the surface area.
  */

  function getAreaOfCircle(radius) {
  	return Math.PI * Math.pow(radius, 2);
  }



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

function getFullName(name) {
	return name.firstName + ' ' + name.lastName;
}

/**
 * Q6: Write a function called `reverseString` that has a String parameter and returns
 * the String reversed. Hint: look up `.split()`
 */

 function reverseString(x) {
 	return x.split('').reverse().join('');
 }


/**
 * Q7: Write a function called `maxArray` that has one Array of Numbers parameter and returns
 * the largest number in the Array. Use a `forEach` loop.
 */

 var numberList = [1, 2, 3, 4, 5, 85, 6, 7, 99, 2, 5, 8]

 function maxArray(array) {
 	return Math.max.apply(Math, array);
 };

 /// Teacher's solution using forEach ///

function maxArray(arr) {
	var largestSoFar = arr[0];

	arr.forEach(function(num) {
		if (num > largestSoFar) {
			largestSoFar = num;
		}
	});
	return largestSoFar;
}



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
 	q0: countdown,
 	q1: max,
 	q2: longer,
 	q3: isEven,
 	q4: getAreaOfCircle,
 	q5: getFullName,
 	q6: reverseString,
 	q7: maxArray
 };

 /**
  * Q9: Use the Object from Q8 to call all of the functions you've created.
  */
// Call countdown
master.q0();
// Call max
console.log(master.q1(2, 3));
// Call longer
console.log(master.q2('hello', 'world'));
// Call isEven
console.log(master.q3(9));
// Call getAreaOfCircle
console.log(master.q4(6));
/// Call getFullName
console.log(master.q5( {
	firstName: 'Bob',
	lastName: 'Dole'
}));
//call reverseString
console.log(master.q6('dlrow olleh'));
/// call maxArray
console.log(master.q7([1, 4, 8, 2, -1, 2]));

