// // YOUR CODE BELOW
// ### My Or, My And

// Define a function, `myOr`, that accepts three arguments of any type.

// `myOr` should return the same result as the buit-in `||` operator:

// ```javascript
// myOr(true, true, false) === (true || true || false); // => true
// ```

// Then, define a function, `myAnd`, that accepts three arguments of any type.

// `myAnd` should return the same result as the buit-in `&&` operator:

// ```javascript
// myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
// ```

function myOr(a, b, c) {
  return a || b || c;
}

function myAnd(a, b, c) {
  return a && b && c;
}
