// // ### Deeper Copy

// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-
// dimensional array.

// ```javascript
// let myArray = [1, [2, 3]];

// let copy = deeperCopy(myArray);
// copy[1].push(4);

// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray); // [1, [2, 3, 4]]
// ```
// YOUR CODE BELOW


function deeperCopy(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let row = [];
            for (let j = 0; j < arr[i].length; j++) {
                row.push(arr[i][j]);
            }
            result.push(row);
        } else {
            result.push(arr[i]); 
        }
    }

    return result;
}





// function deeperCopy(arr){
//     result=[];
//     for(let i=0; i<arr.length; i++)
//         if(Array.isArray(arr[i])){
//             let row =[];
//             for(let j=0; j<arr[i].length;i++){
//                 row.push(arr[i]);
//             }
//             result.push(row);
//         }
//         else{
//             result.push(arr[i]);
//         }
// return result;
//     }
