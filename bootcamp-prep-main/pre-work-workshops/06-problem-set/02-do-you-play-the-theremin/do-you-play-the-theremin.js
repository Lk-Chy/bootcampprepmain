// YOUR CODE BELOW
// ### Do You Play the Theremin

// Define a function `doYouPlayTheTheremin` that accepts a string as an argument.
// `doYouPlayTheTheremin` should return true if the inputted string starts with the
// letters `s` or `S`. Otherwise, `doYouPlayTheTheremin` should return false.

// ```javascript
doYouPlayTheTheremin('Griffin'); // => false
doYouPlayTheTheremin('Scott'); // => true
// ```

function doYouPlayTheTheremin(a){
if (a[0]==='s' || a[0]==='S'){
    return true;
}
else{
    return false;
}
}