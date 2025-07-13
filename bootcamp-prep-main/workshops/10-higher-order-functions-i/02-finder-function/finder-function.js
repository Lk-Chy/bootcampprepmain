// YOUR CODE BELOW

// ### Finder Function

// Define a function 'finderFunction' that takes an array and a callback. Pass
// each element from the array into the callback. If the callback returns true,
// return the index of the current element. If the callback never returns true,
// return -1;

// ```javascript
let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
  return !(num % 2);
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1
// ```

function finderFunction(arr, func) {
  for (let i = 0; i < arr.length; i++) { //i think this can be done using counter function as well like the counter counts every time the function is called as a result the counter incleases just like the for loop. But i dont know exactly how to do it.
    if (func(arr[i])) {
      return i;  // Found one where callback returned true
    }
  }
  return -1;  // No element satisfied the condition
}


// function finderFunction(arr, func){
// let x = func(arr);
// if(x = true){
//     return 
// }
// else{
//     return '-1';
// }

// }