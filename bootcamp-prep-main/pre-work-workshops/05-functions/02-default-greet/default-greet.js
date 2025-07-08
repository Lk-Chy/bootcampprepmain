// YOUR CODE BELOW
// ### Default Greet

// Define a function, `defaultGreet`, that takes a first and a last name.
// `defaultGreet` should return a string greeting for the given names. If the user
// does not define a last name, assume the last name is 'Doe'.

// ```javascript
defaultGreet("Chaka", "Khan"); // => 'Hi Chaka Khan!'
defaultGreet("John"); // => 'Hi John Doe!'
// ```

function defaultGreet(a,b='Doe') {
    // if( b === undefined){
    //     b='Doe';
    // }
    return ('Hi '+ a+' '+b+'!');
}


// const defaultGreet = (a,b='Doe') => {
//     return ('Hi '+ a+' '+b+'!');
// };