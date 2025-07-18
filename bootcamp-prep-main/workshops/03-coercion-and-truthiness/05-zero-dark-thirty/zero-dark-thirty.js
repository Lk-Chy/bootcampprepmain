// // YOUR CODE BELOW
// ### Zero Dark Thirty

// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `zeroDarkThirty` should return a number with all of the zeroes removed:

// ```javascript
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// zeroDarkThirty(0) // => NaN
// ```
function zeroDarkThirty(a){
    if(a){
        let b=String(a);
        let c='';
        for(let i=0;i<b.length;i++){
            if(b[i]==='0'){
                continue;
            }
            else{
                c=c+b[i];
            }
        }
        return Number(c);
    }
    else{
        return NaN
    }
}