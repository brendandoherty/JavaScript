# Class 05 Bonus Material

## 1. Implicit Global Variables

Any time you assign a value to variable that has not been previously declared (no `var` keyword),
it automatically becomes a global variable, no matter where it was assigned.

```javascript
function myFunc() {

  function helper() {
    // This variable is now global
    a = 'test';
  }

}
```

This generally unexpected and is not desirable behavior, so as a best practice do not use globals this way.

## 2. Other Higher Order Array Functions

Look up Array `filter()` and use it to filter the following array such that it only has even numbers.

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```
