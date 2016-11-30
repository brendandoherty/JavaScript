
function setup () {

$('li').css('color', 'blue')

$('ul').on('click', 'li', markComplete);

$('button').on('click', addToList);

$('button').on(keypress(enter), addToList)

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




