// Model

var model = {
	email: undefined,
	origin_addresses: '',
	destination_addresses: '',
  distance: ''
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
  document.getElementById("formContainer").style.display="none";
};

// Controller

function setup() {
  compileTemplate();
  renderForm();

  // Event Listeners

$('#formContainer').on('click', '#submitbutton', handleSubmit)


$('#gridCheckbox3').on('click', function() {
   if($(this).is(':checked')) {
      document.getElementById("currentStairs").style.display="block";
   } else {
      document.getElementById("currentStairs").style.display="none";
   }
});

$('#gridCheckbox4').on('click', function() {
   if($(this).is(':checked')) {
      document.getElementById("newStairs").style.display="block";
   } else {
      document.getElementById("newStairs").style.display="none";
   }
});
};


// Form Controllers


function handleSubmit() {
  var email = $('input[type="email"]').val();
  $('input[type="email"]').val('');
  firebase.database().ref('model').push({
    email: email,
  });

  // Google Maps API Reference
var addressLine1 = $('input[id="dest-address-line1"]').val();

var originStreetNum = $('input[id="originStreetNum"]').val();
var originStreetName = $('input[id="originStreetName"]').val();
var originStreetType = $('input[id="originStreetType"]').val();
var originCity = $('input[id="originCity"]').val();
var originState = $('input[id="originState"]').val();

var destinationStreetNum = $('input[id="destinationStreetNum"]').val();
var destinationStreetName = $('input[id="destinationStreetName"]').val();
var destinationStreetType = $('input[id="destinationStreetType"]').val();
var destinationCity = $('input[id="destinationCity"]').val();
var destinationState = $('input[id="destinationState"]').val();




var addressTest = addressLine1.split(" ")

console.log(addressTest);


function countArray(arr, func) {
  var string;
  for (i = 0; i < arr.length; i++) {
    string += arr[i] + '+';
  }
  return string;
 };

 var answer = countArray(addressTest);

var str = addressLine1;
var newAddress = str.split(",");
for ( var i = 0; i < newAddress.length; i++ ) {
    console.log(newAddress[i])
}
str = newAddress.join("");
console.log(str)





var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
url += newAddress + '+' + originCity + '+' + originState + '&destinations=';
url += destinationStreetNum + '+' + destinationStreetName + '+' + destinationStreetType + '+' + destinationCity + '+' + destinationState;
url += '&key=AIzaSyCgiwtC_K-CKQ5qGkUBHCyuL4LdsrPAkDQ'
console.log(url)

$.get(url, function(data) {
  model.origin_addresses = data.origin_addresses;
  model.destination_addresses = data.destination_addresses;
  model.distance = data.rows.distance.text;
})

  renderSuccess();
};

$(document).ready(setup);