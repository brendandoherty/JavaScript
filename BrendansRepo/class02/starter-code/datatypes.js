/**
 * Question 1
 *
 * Calculate the distance between these two points and log the answer
 * to the console.
 *
 * (1, 3) and (4, 9)
 */

var x1 = 1;
var y1 = 3;

var x2 = 4;
var y2 = 9;

var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log(distance);


// Your code here

/**
 * Question 2
 *
 * Calculate the volume of a sphere with a radius of 5.
 *
 */

var radius = 5;
var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log(volume);



// Your code here


/**
 * Question 3
 *
 * Log to the console a random number between 50 and 100.
 *
 */

 var randomNumber = Math.ceil((Math.random() * 50) + 50);
 console.log(randomNumber);


// Your code here


/**
 * Question 4
 *
 * Create variables to store your first name, last name, and age. Then use concatenation
 * to create a sentence about yourself. Log the sentence to the console.
 *
 */

 var firstName = 'Brendan';
 var lastName = 'Doherty';
 var age = 27;

 var badass = firstName + ' ' + lastName + ' is a true badass'
 console.log(badass);


// Your code here

/**
 * Question 5
 *
 * Convert the sentence from question 4 to all caps so that it looks like you are
 * YELLING!
 *
 */
 badass.toUpperCase();
 console.log(badass.toUpperCase());


// Your code here

/**
 * Question 6
 *
 * Represent the following statement using booleans and logical operators.
 * Log the result of the logical expression to the console.
 *
 * The first president of the U.S.A. was George Washington and there are 52 states
 * or the capital is Washington D.C.
 */

var firstPresWashington = true;
var states = false;
var capital = true;

var answer = (firstPresWashington && states) || capital;
console.log(answer);

// Your code here
