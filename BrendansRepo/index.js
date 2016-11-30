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

/// JQuery Practice ///

/// Make list items blue ///
///see below///

/// Bold first list item ///
$('li:first-child').css('font-weight', 'bold');

/// Make title say TODO ///
$('h1').text('TODO')

/// Add text input and button after the title ///
$('h1').after('<input type="text"><button>Submit</button>')

/// The above is just practice. We'd usually use just CSS / HTML to do the above, rather than JQuery ///

$('button').on('click', turnListItemsBlue);
function turnListItemsBlue() {
	$('li').css('color', 'blue');
};

/// using 'this' to specify a particular element. In the below case, 'this' specifies that only the list item that has been clicked will turn red, rather than all list items ///
$('li').click(doSomething);

function doSomething() {
$(this).css('color', 'red');
}

/// make sure that HTML has been run before our function ///
$(document).ready(ourFunction);













