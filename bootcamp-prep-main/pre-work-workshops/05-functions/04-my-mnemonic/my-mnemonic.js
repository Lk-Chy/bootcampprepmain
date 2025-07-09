// YOUR CODE BELOW
// ### My Mnemonic

// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// ```javascript
myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// ```

function myMnemonic(a,b,c,d){
    let z='';
    if (a!== undefined && a!==''){
        z=z+a[0];
    }
    if (b!== undefined && b!== ''){
        z=z+b[0];
    }
     if (c!== undefined && c!== ''){
        z=z+c[0];
    }  
         if (d!== undefined && d!== ''){
        z=z+d[0];
    }   
    return z;

}