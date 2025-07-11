// // YOUR CODE BELOW
// ### Frequency Analysis

// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.

// ```javascript
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
// ```

function frequencyAnalysis(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (result[letter]) { // if it is true i.e like result['a'] if its not found before creates a element in the object and if found adds 1 to the previous value.
      result[letter] = result[letter] + 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
}
