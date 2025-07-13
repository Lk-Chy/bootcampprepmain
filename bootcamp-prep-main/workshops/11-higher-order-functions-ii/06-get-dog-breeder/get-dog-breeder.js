// // YOUR CODE BELOW
// ### Get Dog Breeder

// Remember the dog breeder question from an earlier workshop? It assumed that the
// default name for a dog should be 'Steve', and the default age should be 0.

// Define a function, getDogBreeder, that takes a default name and age, and returns
// a dogBreeder function. The returned dogBreeder function should use the default
// values defined when dogBreeder was called.

// You can copy over the solution code from dogBreeder if you'd like.

// ```javascript
// let puppyFarm = getDogBreeder('Snoopy', 0);
// let rescueShelter = getDogBreeder('Odie', 3);

// puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
// puppyFarm(2); // => {name: 'Snoopy', age: 2}

// rescueShelter(); // => {'Odie', 3}
// ```

function getDogBreeder(defaultName, defaultAge) {
  return function(arg1, arg2) {
    if (typeof arg1 === 'string' && typeof arg2 === 'number') {
      // both name and age provided
      return { name: arg1, age: arg2 };
    } else if (typeof arg1 === 'number') {
      // only age provided
      return { name: defaultName, age: arg1 };
    } else if (typeof arg1 === 'string') {
      // only name provided
      return { name: arg1, age: defaultAge };
    } else {
      // no arguments
      return { name: defaultName, age: defaultAge };
    }
  };
}



// function getDogBreeder(defaultName, defaultAge) {
//   return function(arg1, arg2) {
//     if (typeof arg1 === 'string' && typeof arg2 === 'number') {
//       return { name: arg1, age: arg2 };
//     } else if (typeof arg1 === 'number') {
//       return { name: defaultName, age: arg1 };
//     } else {
//       return { name: defaultName, age: defaultAge };
//     }
//   };
// }
