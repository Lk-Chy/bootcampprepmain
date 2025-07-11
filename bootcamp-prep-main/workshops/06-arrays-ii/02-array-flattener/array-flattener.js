// YOUR CODE BELOW
// ### Array Flattener

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```

function arrayFlattener(arr){
    debugger
    let arr1=[];
    for(i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])){
            for(let j =0; j<arr[i].length; j++){
                arr1[i+j]=arr[i][j];
            }
        }
        else{
            arr1[i]=arr[i];
        }
    }
    return arr1;
}
