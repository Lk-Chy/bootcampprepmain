// // YOUR CODE BELOW
// ### My Last Index Of

// Define a function, `myLastIndexOf`, that accepts up to three arguments:
//   1. array
//   2. searchValue
//   3. startIdx (optional)

// `myLastIndexOf` should return the last index at which the searchValue appears in
// the array.

// ```javascript
myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// ```

// If the searchValue isn't in the array, `myLastIndexOf` should return -1.

// ```javascript
myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// ```

// If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
// at that index, and then move toward the front of the array as it looks for the 
// value.

// ```javascript
myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// ```

// You cannot use the built-in [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) for this problem, but feel free
// to use it in the future! Note that strings also have a [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).


function myLastIndexOf(arr, searchValue, startIdx=arr.length -1){
    let c=-1;
    for (let i = startIdx; i>=0; i--){
        if(arr[i]===searchValue){
            c=i;
            break;
        }
    }
    return c;
}




   // let c=-1;
    // if (startIdx === undefined){
    //     startIdx = 0;
    // }
    // else{
    //     for(let i= startIdx; i>=0; i--){
    //     if(arr[i]===searchValue){
    //         c=i;
    //         if(c===0)
    //     }
    //     }
    // }
    // for(let i = startIdx; i< arr.length; i++){
    //     if(arr[i]===searchValue){
    //         c=i;
    //     }
    // }
