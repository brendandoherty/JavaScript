/**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

 // Your code here
 var code = [];

 /**
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */

// Your code here
code.push('x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 
'n', 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r', 'o', 'm', 'c');


/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */

// Your code here
code.shift();
code.pop();

/**
 * Question 4
 * Reverse the array.
 */

// Your code here
code.reverse();

/**
 * Question 5
 * Replace the last element in the array with an 'e'.
 * Hint: Use length
 */

// Your code here
var lastIndex = code.length - 1;
code[lastIndex] = "e";

/**
 * Question 6
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 */

// Your code here
code [4] = ' ';
code [13] = ' ';

/**
 * Question 7
 * Join the array with an empty String in between each character and log the
 * result to the console.
 */

 // Your code here
 console.log(code.join(''));
 
