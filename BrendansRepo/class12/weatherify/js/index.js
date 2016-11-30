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
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    /// add on (concatenate) the city and country that the user entered to the url as well as my unique app ID///
    url += city + ',' + country;
    url += '&units=imperial'
    url += '&appID=6e1fa984031e8007408684cbc0f265c7';

  $.get(url, function(data) {
        weather.city = city;
        weather.country = country; 
        weather.temperature = data.main.temp;
        weather.description = data.weather.description;
        weather.humidity = data.main.humidity;
        weather.clouds = data.clouds.all;

        renderWeather();
  })

  });
});
