// // YOUR CODE BELOW
// ### Only One

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```


function onlyOne(a,b,c){
let d = 0;
if(a) d++;
if(b) d++;
if(c) d++;

if(d!=1){
    return false;
}
else  {
    return true;
}
}