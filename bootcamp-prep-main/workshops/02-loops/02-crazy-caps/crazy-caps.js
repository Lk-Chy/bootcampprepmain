// YOUR CODE BELOW

// ### Crazy Caps

// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```


function crazyCaps(a){
   let z='';
for(let i=0;i< a.length; i++){
    if (i%2 === 0){
        z=z+a[i].toLowerCase();
    }
    else{
        z=z+a[i].toUpperCase();
    }
}
    return z;
}