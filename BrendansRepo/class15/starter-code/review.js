// # Lab Review
//
// ## 1. Using the two endpoints documented here, first end the game and then reload the current game.
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
// ```
//
// **PUT /game/:gameId/end-game**
//
// *Response Body*
//
// ```json
// {
//   "gameId": 123,
//   "status": "ended"
// }
// ```
$.ajax({
	url: '/game/123/end-game',
	type: 'PUT',
	success: function() {
		$.get('/current-game', function(data) {
			// update model
		})
	}
})


// ## 2. Incorporate the score's id into the following template.
//
// ```js
// var model = {
//   scores: [
//     {
//       id: 1,
//       points: 15,
//       user: 'jane',
//       winning: true
//     },
//     {
//       id: 2,
//       points: 10,
//       user: 'john',
//       winning: false
//     }
//   ]
// }
	
// ```
//
//<script id="standings-template" type="text/x-handlebars-template">
{{#if token}}
	<ul class="standings">
		{{#each scores}}
			<li data-id="{{id}}" class="{{#if winning}}winning{{/if}}">
		        <h3>{{user}}</h3>
		        <h4>{{points}} points</h4>
		        <button class="plus-one">+</button>
	    </li>
		{{/each}}
	</ul>
{{/if}}
//</script>


// ## 3. In the following event listener function, extract the score id from HTML.

$('body').on('click', '.plus-one', updateScore);

function updateScore(dataId) {
  var dataId = $(this).parent().attr('data-id');
  // get the id of the clicked score button
  // must include .parent because the object being targeted, the plus-one button, does not have an Id, but its parent does
}
