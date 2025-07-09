// // YOUR CODE BELOW
// ### My Reverse

// Define a function `myReverse` that accepts an array.

// `myReverse` should return a new array with the elements in reverse order.

// ```javascript
myReverse([1, 2, 3]);    // => [3, 2, 1]
// ```

// Do not use the built-in [.reverse method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for this problem. You can use it on all
// future problems though!

function myReverse(arr){
    debugger;
    let arr1 =[];
    let n=arr.length -1;
    for(let i =0; i<=n; i++){
        arr1[i]=arr[n-i];
    }
    return arr1;
}