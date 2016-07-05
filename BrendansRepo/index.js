/////////This is my practice js library//////////


//// to iterate through an array using a for loop/////
var myArray = [1, 2, 3, 4];
for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}


////// to create a function for iterating through any array ////

function forEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
	func(arr[i]);
	};
}

var myArray = [1, 2, 3, 4];

forEach(myArray, console.log);

//// to add a function to double each number in the array in the first function ///

function double(num) {
	console.log(num * 2);
}

forEach(myArray, double);

myArray.forEach(double);













