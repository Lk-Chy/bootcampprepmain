// // YOUR CODE BELOW

// ### Stringify

// Define a function, stringify, that takes a callback and returns a new function.
// When the new function is called, it should call the callback, and return the
// value returned by the callback, but not before explicitly coercing the returned
// value to a string.


// ```javascript
// function returnsANumber() {
//   return 100;
// }

// let newFunction = stringify(returnsANumber);
// newFunction(); // => '100'
// ```



function stringify(callback) {
  return function() {
    const result = callback();
    return String(result);  //convert to string here
  };
}


// function stringify (callback){
//     return function(){
//         const result = callback();
//         return stringify(result);
//     }

// }