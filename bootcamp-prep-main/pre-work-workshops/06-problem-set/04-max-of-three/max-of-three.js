// YOUR CODE BELOW
// ### Max of Three

// Write a function `maxOfThree` that accepts three number arguments. `maxOfThree`
// should return largest number of the three.

// ```javascript
maxOfThree(5, 4, 10); // => 10

maxOfThree(7, 7, 4); // => 7
// ```


function maxOfThree(a,b,c){
    if (a>b && a>c){
        return a;
    }
    else if (b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}