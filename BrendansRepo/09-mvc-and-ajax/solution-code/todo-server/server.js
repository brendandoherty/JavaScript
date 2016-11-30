const express = require('express');
const app = express();
const port = 3000;

var todos = [
  'Globally deploy sustainable channels.',
  'Intrinsically matrix cost effective infrastructures.',
  'Fungibly innovate future-proof processes.',
  'Appropriately evolve functionalized initiatives.',
  'Interactively maximize intuitive benefits.',
  'Fungibly visualize top-line scenarios',
  'Interactively incentivize flexible mindshare',
  'Completely simplify progressive manufactured products',
  'Rapidiously administrate principle-centered strategic theme areas',
  'Globally unleash effective markets',
  'Dynamically benchmark high-quality channels',
  'Appropriately underwhelm sustainable systems'
];

app.get('/todos', (request, response) => {
  var numTodos = request.query.num ? request.query.num : Math.floor((Math.random() * todos.length));
  var randomTodos = [];
  for (var i = 0; i < numTodos; i++) {
    randomTodos.push({
      text: todos[Math.floor((Math.random() * todos.length))],
      completed: Math.random() > 0.7
    });
  }

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  response.json(randomTodos);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
