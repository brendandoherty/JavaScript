
// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the fuzzbizz loop.

// - In the loop, every time a string's length is divisible by **3**, instead of logging the number itself, the word "fuzz" should appear.
// - If the string's length is divisible by  **5**, the word "bizz" should be logged.
// - If the string's length is divisible by both **3** and  **5**, then the word "fuzzbizz" should be logged.

// Follow the steps below.

var words = [
  'overconfident',
  'receipt',
  'ring',
  'material',
  'whispering',
  'astronautically',
  'typical',
  'stretch',
  'side',
  'upset',
  'river',
  'excellent',
  'tame',
  'pseudopseudohypoparathyroidism',
  'cry',
  'kill',
  'damp',
  'aback',
  'various',
  'ordinary',
  'tense',
  'pass',
  'picayune',
  'gray',
  'berserk',
  'magenta',
  'birds'
];

// ##### Step 1:
// Construct a for loop that iterates through the word array, and `console.log()`'s out the length of each string.


// ##### Step 2:
// Add an `if/else` statement that logs the string `"fuzz"` if the value being iterated over has a length divisible by `3`; otherwise, log out the length.
// Hint: Remember the "modulus" operator.



// ##### Step 3:
// Add an `else if` clause that logs the string `"bizz"` if the value being iterated over has a length divisible by `5`.


// ##### Step 4:
// Add an additional clause that logs the string `"fuzzbizz"` if the value being iterated over has a length divisible by both `3` and `5`.
// Hint: You may have to change the order.

for (var i = 0; i < words.length; i++) {
  var string = words[i];

if ((string.length % 3 === 0) && (string.length % 5 === 0)) {
  console.log("fuzzbizz");
} else if (string.length % 3 === 0) {
  console.log("fuzz");
} else if (string.length % 5 === 0) {
  console.log("bizz");
} else {
  console.log(string.length)}; 
};
