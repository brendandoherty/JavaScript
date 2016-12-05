// Model

var model = {
	email: undefined,
	startAddress: "3212 Morrison St",
	endAddress: "3378 Stephenson Pl",
	distance: "2 miles"
};

// View

var formTemplate;
var successTemplate;
function compileTemplate() {
  var formTemplateSource = $('#form-template').html();
  formTemplate = Handlebars.compile(formTemplateSource);

  var successTemplateSource = $('#success-template').html();
  successTemplate = Handlebars.compile(successTemplateSource);
};


function renderForm() {
  var formHtml = formTemplate(model);
  $('#formContainer').html(formHtml);
};

function renderSuccess() {
  var successHtml = successTemplate(model);
  $('#successContainer').html(successHtml);
};

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

  renderSuccess();
}

$(document).ready(setup);