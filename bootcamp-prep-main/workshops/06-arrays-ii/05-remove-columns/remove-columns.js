// YOUR CODE BELOW
// ### Remove Columns

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */
// ```

function removeColumns(arr,num){
    let arr1=[];
    for(let i=0; i< arr.length; i++){
        let row = [];
        for(let j= 0; j<arr[i].length-num; j++){
            row.push(arr[i][j]);
        }
        arr1.push(row);
    }
    return arr1;
}
console.log(removeColumns([[1,2,3,4],
[1,2,3,4],[1,2,3,4],[1,2,3,4]],1))