// // YOUR CODE BELOW
// ### Zoo Inventory

// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// ```javascript
let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];

zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
// */
// ```

function zooInventory(arr) {
  let arra1 = [];
  debugger;
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i][0];
    let type = arr[i][1][0];
    let age = arr[i][1][1];
    let str = name + " the " + type + " is " + age+'.';
    arra1.push(str);
    let currArr = arra1;
    
  }
  return arra1;
}

// if(Array.isArray(arr[i]){
//     str1=arr[i].join(" is ");
// })
// else{
//     str2=a[i];
// }

// function zooInventory(arr) {
//   let str = [];

//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i][0];
//     let type = arr[i][1][0];
//     let age = arr[i][1][1];

//     str.push(`${name} the ${type} is ${age}.`);
//   }

//   return str;
// }
