// Model

var weather = {
  city: '',
  country: '',
  temperature: '',
  description: '',
  humidity: '',
  clouds: ''
};

// View

// Compile the template outside of the function, so that we only do it once
// instead of on every render.

var template;
$(document).ready(function() {
  var templateSource = $('#weather-template').html();
  template = Handlebars.compile(templateSource);
});

function renderWeather() {
  var weatherHtml = template(weather);
  $('#weather').html(weatherHtml);
}

// Controller

$(document).ready(function() {
  // First render
  renderWeather();

  // Setup Listeners
  $('#searchForm').on('submit', function(event) {
    event.preventDefault();

    // Get the values enetered by the user
    var city = $('input[name="city"]').val();
    var country = $('input[name="country"]').val();

    // 1. Make the request to OpenWeatherMap API
    // 2. Update model
    // 3. Render view

  });
});
