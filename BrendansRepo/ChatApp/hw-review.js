// ## 1. Given then following API, create a model object with mock data.
//
// **GET /login**
//
// *Response Body*
//
// ```json
// {
//     "token": "kjksdhw232j"
// }
// ```
//
// **GET /scores**
//
// *Response Body*
//
// ```json
// [
//     {
//         "points": 14,
//         "user": "john",
//         "winning": true
//     },
//     {
//         "points": 10,
//         "user": "jane",
//         "winning": false
//     }
// ]
// ```
//
// **GET /current-game**
//
// *Response Body*
//
// ```json
// {
//     "name": "Test Game",
//     "roundsPlayed": 2,
//     "leader": "john"
// }

var model = {
	token: "kjksdhw232j"
	scores: [
		{
        "points": 14,
        "user": "john",
         "winning": true
     },
     {
         "points": 10,
         "user": "jane",
         "winning": false
     }],
    currentGame: {
    	"name": "Test Game",
   		"roundsPlayed": 2,
    	"leader": "john"
     }
};

function renderArticle() {	
	  var templateSource = $('#game-template').html();
	  var template = Handlebars.compile(templateSource);
	  var renderedTemplate = template(model);

  		$('#gameContainer').html(renderedTemplate);
	}

// 2. Using the model object from question 1, create a handlebars template that can render the standings if the user is logged in. The resulting HTML should look like this:
//
// ```html
// <ul class="standings">
//     <li class="winning">
//         <h3>John</h3>
//         <h4>14 points</h4>
//         <button class="plus-one">+</button>
//     </li>
//     <li class="">
//         <h3>Jane</h3>
//         <h4>10 points</h4>
//         <button class="plus-one">+</button>
//     </li>
// </ul>
// ```


// 3. Attach a fictional event listener to the `<button>`s in the created template that would, in theory, update the score.


// 4. Write an AJAX request to send and receive fake data to the following endpoint and log response body's "status":
// 
// **PUT /:userName/score**
//
// *Request Body*
//
// ```json
// {
//     "points": 15
// }
// ```
//
// *Response Body*
//
// ```json
// {
//     "status": "success",
//     "points": 15
// }
// ```


// 5. Refactor the following AJAX request to use `$.ajax` instead of `$.post`.
//
// ```js
// var newGame = {
//     name: 'My New Game',
//     roundsPlayed: 0
// };
// $.post('/game', newGame, function(data) {
//     console.log(data.leader);
// });
// ```
