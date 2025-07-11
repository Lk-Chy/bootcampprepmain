// // YOUR CODE BELOW
// ### Rotate Array

// Define a function, `rotateArray`, that accepts two arguments:
//   1. originalArray (array)
//   2. rotateNum (number)


// If the rotateNum is positive, `rotate` should return a copy of the original
// array rotated to the right by the rotateNum of indices.

// ```javascript
// rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
// ```

// If the rotateNum is negative, `rotate` should return a copy of the original
// array rotated to the left by the rotateNum of indices.

// ```javascript
// rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
// ```

// If the rotateNum is 0, `rotate` should return a copy of the original array
// without rotating it.

// ```javascript
// rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
// ```

// You can assume the absolute value of rotateNum will be less than the length
// of the original array.


function rotateArray(arr, rotateNum) {
  let result = [];
  let n = arr.length;

  if (rotateNum === 0) {
    for (let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
  } else if (rotateNum > 0) {
    for (let i = n - rotateNum; i < n; i++) {
      result.push(arr[i]);
    }
    for (let i = 0; i < n - rotateNum; i++) {
      result.push(arr[i]);
    }
  } else {
    let leftShift = -rotateNum;
    for (let i = leftShift; i < n; i++) {
      result.push(arr[i]);
    }
    for (let i = 0; i < leftShift; i++) {
      result.push(arr[i]);
    }
  }

  return result;
}



// function rotateArray(arr, rotateNum){
// let arr1=[];
// n=arr.length-1;
// if(rotateNum===0){
//     for(let i=0;i<=n;i++){
//         arr1.push(arr[i]);
//     }
// }
// else if(i>0){
// for(let i=n-rotateNum; i<=n; i++){
// arr1.push(arr[i]);
// }
// for(let i = 0; i<=n-rotateNum;i++){
//     arr1.push(arr[i])
// }
// }
// else{
//     for(i=(-1)*rotateNum; i<=n; i++){
//         arr1.push(arr[i]);
//     }
//     for(i=0; i<=(-1)*rotateNum;i++){
//         arr1.push(arr[i])
//     }
// }
// return arr1;
// }