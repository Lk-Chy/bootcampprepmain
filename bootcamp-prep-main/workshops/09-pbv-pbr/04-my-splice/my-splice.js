// YOUR CODE BELOW


// ### My Splice

// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
// array method. However, mySplice should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method
// can actually take any number of values to add).

// Do not use .splice in your function.


// ```javascript
// let myArray = [1, 2, 3];

// mySplice(myArray, 1, 1, 'apples')) // => [2]

// console.log(myArray)    // [1,'apples', 3]
// ```

function mySplice(arr, startIdx, delCount, ...rest) {
    let removedArr = [];

    // Extract deleted items
    for (let i = 0; i < delCount; i++) {
        if (startIdx + i < arr.length) {
            removedArr.push(arr[startIdx + i]);
        }
    }
    // Build the new array after changes
    let before = arr.slice(0, startIdx);
    let after = arr.slice(startIdx + delCount);
    let updated = before.concat(rest, after);

    // Mutate the original array (in-place)
    arr.length = 0; // Clear it
    for (let i = 0; i < updated.length; i++) {
        arr.push(updated[i]);
    }

    // Step 4: Return removed elements
    return removedArr;
}




// function mySplice(arr, startIdx, delCount, ...rest) {
//     let removedArr = [];
//     let firstArr = [];
//     let lastArr = [];

//     for (let i = 0; i < startIdx; i++) {
//         firstArr.push(arr[i]);
//     }

//     if (rest.length !== 0) {
//         for (let j = 0; j < rest.length; j++) {
//             firstArr.push(rest[j]);
//         }
//     }

//     for (let i = startIdx; i < delCount; i++) {
//         removedArr.push(arr[i]);
//     }

//     for (let k = startIdx + delCount; k < arr.length; k++) {
//         lastArr.push(arr[k]);
//     }

//     return firstArr.concat(lastArr);
// }


    // if(startIndex<0){
//     startIndex = arr.length + startIndex;
//     if(start < 0) start = 0;
// }


// let delete = [];

// for (let i = start; i< start + deleteCount && i < arr.length; i++){
//     delete.push(arr[i]);
// }


