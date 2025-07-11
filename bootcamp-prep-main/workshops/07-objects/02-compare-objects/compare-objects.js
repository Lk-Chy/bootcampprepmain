// YOUR CODE BELOW
// ### Compare Objects

// Define a function, `compareObjects`, that accepts two objects as arguments.

// `compareObjects` should return true if both objects have exactly the same
// key/value pairs. Otherwise, `compareObjects` should return false. Assume the
// objects are not nested.

// ```javascript
// compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
// ```

function compareObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  // First check: same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Now check every key/value pair
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
