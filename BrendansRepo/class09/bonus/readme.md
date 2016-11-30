# Class 09 Bonus Content

## 1. Making HTTP Requests with XMLHttpRequest Object directly

Occasionally, we may need more control over how HTTP requests are made in are applications, or maybe we aren't using jQuery. In this case, we could make AJAX requests by using the `XMLHttpRequest` Object.

```js
// Make a new request Object
var request = new XMLHttpRequest();

// Prepare the request
request.open('GET', 'https://jacobfriedmann.com:3000/todos', true);

// Add a function that is called whenever the state of the request changes
request.onreadystatechange = function() {
	if(request.readyState === 4) { // done
		if(request.status === 200) { // complete (HTTP Success)
      // Parse the response
      var data = JSON.parse(request.responseText);

      console.log(data);
		}
	}
};

// Send the request
request.send();
```

### Exercise

Can you refactor our application to make requests using the XMLHttpRequest Object?

---

## 2. The Future is so `fetch`

Modern browsers and the new versions of JavaScript have another tool for making HTTP Requests called `fetch`. To understand fetch, you must first understand how JavaScript Promises work, which is a tall order. If you are feeling ambitious, take a look at this blog post: https://davidwalsh.name/fetch

```js
fetch('/next/page')
.then(function(response) {
  return response.json();
}).then(function(data) {
	console.log(data);
});
```

### Exercise

Can you refactor our application to use the `fetch` API?
