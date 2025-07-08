// YOUR CODE BELOW
// ### Last Character

// Define a function `lastCharacter` that accepts two strings as arguments.
// `lastCharacter` should return true if both strings end with the same character.
// Otherwise, `lastCharacter` should return false.


// ```javascript
lastCharacter('apples', 'pumpkins'); // => true

lastCharacter('marker', 'pen'); // => false
// ```

function lastCharacter(a,b){
    if (a[a.length -1] === b[b.length -1]){
        return true;
    }
    else{
        return false;
    }
}


