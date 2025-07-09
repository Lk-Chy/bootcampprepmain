// YOUR CODE BELOW
// ### Is Truthy

// Write a function `isTruthy` that accepts a single argument of any type.

// `isTruthy` should return true if that argument is 'truthy'.

// If the value is 'falsey', log out one of the messages below, corresponding to
// the type of the value tested.

// ```
// 'The boolean value false is falsey'
// 'The null value is falsey'
// 'undefined is falsey'
// 'The number 0 is falsey (the only falsey number)'
// 'The empty string is falsey (the only falsey string)'
// ```

// ```javascript
// isTruthy('I yearn for truth'); // => true
// isTruthy(null); // => The null value is falsey
// ```

function isTruthy(value) {
  if (value) {
    return true;
  } else {
    if (value === false) {
      return "The boolean value false is falsey";
    } else if (value === null) {
      return "The null value is falsey";
    } else if (value === undefined) {
      return "undefined is falsey";
    } else if (value === 0) {
      return "The number 0 is falsey (the only falsey number)";
    } else if (value === "") {
      return "The empty string is falsey (the only falsey string)";
    } else if (Number.isNaN(value)) {
      return "NaN is falsey";
    }
  }
}
