
function setup () {
$('li').css('color', 'blue');

$('li:first-child').css('font-weight', 'bold');

$('h1').text('TODO');

$('h1').after('<input type="text"><button>Submit</button>');

$('ul').on('click', 'li', markComplete);

$('button').on('click', addToList);
};

function markComplete() {
	$(this).css('text-decoration', 'line-through');
}

function addToList () {
	var input = $('input').val()
	var listItem = $('<li>').text(input);
	listItem.css('color', 'blue');
	$('ul').append(listItem);
}

$(document).ready(setup);




