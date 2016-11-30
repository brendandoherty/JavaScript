// Model //

var todos = [];


// View // 

function renderTodos() {
	$('#todoList').html('');
	$('#todoInput').val('');
	var source = $('#todo-template').html();
	var template = Handlebars.compile(source);

	for (var i = 0; i < todos.length; i++) {
		var todoListItem = template(todos[i]);
		$('#todoList').append(todoListItem);
	}
};

// Controller // 

function setup() {
	renderTodos();

	$('#submit').on('click', addTodo);
	$('#todoList').on('click', '.complete', completeTodo)
	$('#todoList').on('click', '.delete', deleteTodo)
	$('#todoInput').keypress(function(e) {
		if(e.which == 13) {
			addTodo()
		}
	})
}

function addTodo() {
	var input = $('#todoInput').val();
	todos.push({
		text: input,
		complete: false
	});

	renderTodos();
}

function completeTodo() {
	var todoIndex = $(this).parent().index();
	todos[todoIndex].complete = true;

	renderTodos();
}

function deleteTodo() {
	var todoIndex = $(this).parent().index();
	todos.splice(todoIndex, 1);

	renderTodos();
}

$(document).ready(setup)