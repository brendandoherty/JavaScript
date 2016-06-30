/*
 *
 * Question 1
 * Write a function that will "roll a dice". It should generate a random number between 1 and 6 and then log that to the console.
 * Call your function.
 *
 */ function rollDice() {
 	var oneDie = Math.floor(Math.random() * 6) + 1;
 }



/*
 *
 * Question 2
 * Write a function that will roll two dice. In addition to logging each dice's value, it should also log the sum.
 * Call your function.
 *
 */


/// write a function to roll any number of dice ////
function rollDice() {
 	var oneDie = Math.floor(Math.random() * 6) + 1;
 	return oneDie;
 }

function nDice(numberOfRolls) {
var i = 0;
var sum = 0;
while (i < numberOfRolls) {
var roll = rollDice();
console.log(roll);
sum += roll;
i++;
	}
	console.log(sum);
	return (sum);
}

nDice (3);

//// note** you don't need to add return sum for the above function, but if we ever want to use sum again, it's useful to return it**////////