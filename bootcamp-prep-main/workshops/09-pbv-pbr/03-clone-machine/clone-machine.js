// // YOUR CODE BELOW
// ### Clone Machine

// Write a function `cloneMachine`, that, given an animal (represented as an object),
// returns a clone of the original animal.

// The name of the clone should be the name of its parent, concatenated with the word
// 'Clone'.

// `cloneMachine` should also push the name of the clone to the parent's offspring
// array.

// ```javascript
// let dolly = {
//   name: 'Dolly',
//   species: 'sheep',
//   offspring: []
// }

// let dollyClone = cloneMachine(dolly);

// console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
// console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
// ```

// function cloneMachine(animal){
//     let a=animal;
//     let clone = {};
//     let Keys = Object.keys(a); // arays of keys i.e name , species, offspring

//     for(let i=0; i< Keyseys.length; i++){

//         if (name in a){
//             clone[Keys[i]] = this[Keys[i]] + 'Clone';
//         }
//         else{
//             clone[Keys[i]] = this[Keys[i]];
//         }
        
//     }

//     return clone;
// }

// function cloneMachine(animal) {
//   let clone = {};
//   let keys = Object.keys(animal);

//   for (let i = 0; i < keys.length; i++) {
//     if (keys[i] === "name") {
//       clone[keys[i]] = animal[keys[i]] + "Clone";
//     } else {
//       clone[keys[i]] = animal[keys[i]];
//     }
//   }

//   // Push the clone's name into the original animal's offspring array
//   animal.offspring.push(clone.name);

//   return clone;
// }


function cloneMachine(animal) {
  // Create an empty clone object
  let clone = {};

  // Loop through each key in the original animal
  let keys = Object.keys(animal); // keys har aaune vayo in form of array
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    // If the key is 'name', append 'Clone'
    if (key === "name") {
      clone[key] = animal[key] + "Clone";
    } else if (key === "offspring") {
      // Copy the offspring array, but make sure it's a new array (not reference)
      clone[key] = [...animal[key]];
    } else {
      // Copy all other properties as-is
      clone[key] = animal[key];
    }
  }

  // Push the clone's name into the original animal's offspring array
  animal.offspring.push(clone.name);

  // Return the clone object
  return clone;
}
