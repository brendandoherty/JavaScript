// Model

var model = {
	email: undefined,
	startAddress: "3212 Morrison St",
	endAddress: "3378 Stephenson Pl",
	distance: "2 miles"
};

// View

var formTemplate;
function compileTemplate() {

  var formTemplateSource = $('#form-template').html();
  formTemplate = Handlebars.compile(formTemplateSource);
}

function renderForm() {
  var formHtml = formTemplate(model);
  $('#formContainer').html(formHtml);
}

// Controller

function setup() {
  compileTemplate();
  renderForm();

  // Event Listeners

$('#formContainer').on('click', '#submitbutton', handleSubmit)
};



function handleSubmit() {
	var email = $('input[type="email"]').val();
  $('input[type="email"]').val('');
	firebase.database().ref('model').push({
    email: email,
  });
}

$(document).ready(setup);