// // YOUR CODE BELOW
// ### Make Grid

// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// ```javascript
// makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/
// ```

makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/

function makeGrid(numColumns, numRows){
    debugger 
    let arr=[];
for (let i=0; i<numRows; i++){
    let row =[];
    for(let k=1; k<=numColumns; k++){
        row.push(k);
    }
    arr.push(row);
}
return arr;
}

