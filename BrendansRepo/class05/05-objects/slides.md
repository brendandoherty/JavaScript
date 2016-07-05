# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
## Objects

- Understand scope and use it to predict the values of variables
- Use JavaScript Objects and other data types to model complex data
- Store functions in variables, arrays and objects
- Create and understand Higher-order functions
- Accept User input in node application
- Fork, Clone, and Pull Request Git Repositories

---

### Agenda

| Timing | Topic |
| --- | --- |
| 10 min | Review: functions |
| 15 min | Scope |
| 20 min | JavaScript Objects |
| 20 min | Exercise: Modeling data |
| 15 min | Functions as Data Types |

--

| Timing | Topic |
| --- | --- |
| 20 min | Exercise: Math library |
| 20 min | Higher order functions |
| 20 min | Exercise: Array forEach |
| 15 min | Console Input |
| 20 min | Git Open Source Workflow |
| 5 min | Final Questions & Exit Tickets |

---

## HW Review

---

## Review: functions

--

<img src="../04-functions/img/function.png" style="max-height: 500px" />

--

### Function Declaration

Before we call, or "use", a function, we must define it.

```javascript
function speak() {
  console.log('Hello, world!');
}
```

--

### Calling Functions

```javascript
function speak() {
  console.log("hello there!")
}

speak;
// [Function: speak]

speak();
//=> hello there!
```

--

### Function Parameters

```javascript
function sayThanks(name) {
  console.log('Hello ' + name);
}

sayThanks('Mark');
//=> 'Hello Mark'

sayThanks('Obama');
//=> 'Hello Obama'
```

--

### Arguments

```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument)
```

--

### Return values

```javascript
function sum(x, y) {
  return x + y;
}

var z = sum(3, 4);
// => 7
```

---

## Scope

Scope is the set of variables you have access to.

--

### The Global Scope

<img src="img/earth.jpg" style="max-height: 500px" />

--

### The Global Scope

- Outside of any function
- Can be accessed from anywhere

```javascript
var name = 'Bob';
```

--

### Local Scope

Conversely, if a variable is declared inside a function, it is referred to as *Local*.

A variable with local scope cannot be referenced outside of that function.

```javascript
var myGlobalVariable = 'hello';

function myFunction() {
  var myLocalVariable = 'world';
}
```

--

### Local and Global Scope

Take a look at the code below:

```javascript
var a = "this is the global scope";

function myFunction() {
  var b = "this variable is defined in the local scope";
}

myFunction();
console.log(b);
```

Note:

In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

--

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return a + " " + name;
}

sayHello("JavaScript");
//=> "Hello JavaScript";
```

--

<img src="img/scope1.png" style="max-height: 500px" />

--

<img src="img/scope2.png" style="max-height: 500px" />

--

<img src="img/scope3.png" style="max-height: 500px" />

--

### Nested Function Scope

```javascript
var a = 1;

function getScore () {
  var b = 2,

  function add(c) {
    return a + b + c;
  }

  return add(3);
}

getScore();
// => 6
```

Note:

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

---

## JavaScript Objects

--

### Objects

JavaScript Objects are basically a collection of properties, keys and values.

```javascript
var myObject = {};
```

--

### Properties, keys and values

**keys** must be string. Like indices in Arrays; how we locate values.
**values** any data type. Accessed by using the "key".

```javascript
var instructor = {
  'firstName': 'Jacob',
  'lastName': 'Friedmann',
  'age': 25,
  'your favorite color?': 'blue'
};
```

--

### Bracket Notation

Access values in an object by using bracket notation.

```javascript
var instructor = {
  'firstName': 'Jacob',
  'lastName': 'Friedmann',
  'age': 25,
  'your favorite color?': 'blue'
};

instructor['firstName'];
// 'Jacob'
```

--

### Setting value in an Object

```javascript
var instructor = {
  'firstName': 'Jacob',
  'lastName': 'Friedmann',
  'age': 25,
  'your favorite color?': 'blue'
};

instructor['occupation'] = 'Software Engineer';
```

--

### Keys without quotes

```javascript
var instructor = {
  firstName: 'Jacob',
  lastName: 'Friedmann',
  age: 25,
  'your favorite color?': 'blue'
};
```

--

### BEST PRACTICE

Use keys without spaces or special characters.

--

### Dot notation

```javascript
var instructor = {
  firstName: 'Jacob',
  lastName: 'Friedmann',
  age: 25,
  'your favorite color?': 'blue'
};

instructor.firstName;
// 'Jacob'
instructor.occupation = 'Software Engineer';
```

---

## Exercise: Modeling data

---

## Functions as Data Type

--

### Functions are First-Class

Functions are "first class" in JavaScript, which means they can be used anywhere other data types are used:

- Stored in variables
- Stored in other data structures (like arrays and objects)
- Used as arguments
- Used as return values

--

### Function Expression

```javascript
var speakFunction = function speak() {
  console.log('hello world');
};

speakFunction();
```

--

### Anonymous Functions

When a function is used in a function expression, you don't need to include a name. We call a function without a name an Anonymous Function.

```javascript
var speakFunction = function () {
  console.log('hello world');
};

speakFunction();
```

This doesn't work for function declaration:

```javascript
function () {
  console.log('hello world');
}
// Syntax Error
```

--

### Functions in Objects

Functions can also be stored in Objects

```javascript
var spaceUtils = {
  galaxy: 'Milky Way',
  logPlanets: function () {
    var planets = ['Mercury', 'Venus', 'Mars'];

    for (var i = 0; i < planets.length; i++) {
      console.log(planets[i]);
    }
  }
}
```

---

## Exercise: First-Class Functions

---

## Higher Order Functions

--

### What can `a` be?

```javascript
function helloWorld(a) {
  // do something
}
```

--

## Higher order functions

Functions can also be parameters to other functions. A function that has a function parameter is called a "higer-order" function.

--

### Any data type including a function

```javascript
function speak(words) {
  console.log(words);
}

function helloWorld(a) {
  a('hello world!');
}

helloWorld(speak);
```

--

### Build forEach loop

We could write a function that loops through an array and calls another function for each element in the array.

```javascript
function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function speak(word) {
  console.log(word);
}

myForEach(['hello', 'world'], speak);
```

--

### Array forEach

```javascript
var myArray = ['hello', 'world'];

function speak(word) {
  console.log(word);
}

myArray.forEach(speak);
```

--

### Array forEach Anonymous function

```javascript
var myArray = ['hello', 'world'];

myArray.forEach(function (word) {
  console.log(word);
});
```

---

## Exercise: Array forEach

---

## Getting user input in node

--

### The prompt library

```javascript
var prompt = require('prompt');
```

--

### Start the "prompt"

```javascript
//
// Start the prompt
//
prompt.start();
```

--

### Collect user input

```javascript
//
// Get two properties from the user: username and email
//
prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});
```

---

## GitHub Open Source Workflow

--

### Review: Simple Workflow

--

<img src="../01-command-line-JS/img/workflow1_1.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_2.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_3.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_4.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_5.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_6.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_7.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_8.png" style="max-height: 700px" />

--

<img src="../01-command-line-JS/img/workflow1_9.png" style="max-height: 700px" />

--

### Open Source

<img src="img/workflow3_1.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_2.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_3.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_4.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_5.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_6.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_7.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_8.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_9.png" alt="github workflow" style="max-width: 1000px;" />

--

<img src="img/workflow3_10.png" alt="github workflow" style="max-width: 1000px;" />

--

### Vocab

**fork** a fork is a new repository *on GitHub* with the same code and history as the repository it is "forked" from (the upstream repository). Forking a repository allows you to freely experiment with changes without affecting the original project.

**upstream repo** a repository from which another repository has been forked.

--

### Vocab

**(core) contributors** devolopers who have direct push/pull access to a repository/open source project.

**pull request** a request that an upstream repository pull changes from a fork. A pull request can be accepted into the upstream project or denied.

Note:

Why might we fork?

--

### Why Fork?

1. Don't have permission to push to original project.
2. Major diversion in project goal/strategy/functionality.
3. Need to make project compatible with your specific environment.

---

## [Assignment 3](https://github.com/jacobdfriedmann/JSDC2-Assignment3)

---


## [Exit Ticket! (Class 6)](http://goo.gl/forms/KzVZ9fuo2YYw5WIB3)

---

# Goodnight :-)
