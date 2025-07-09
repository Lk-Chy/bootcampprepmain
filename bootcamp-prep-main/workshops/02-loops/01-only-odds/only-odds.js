// YOUR CODE BELOW

// ### Only Odds

// Define a function, `onlyOdds`, that accepts a number as an argument. `onlyOdds`
// should should return the sum of all the odd numbers between the given number
// and 1.

// If `onlyOdds` receives an argument less than 1, it should return 0.

// ```javascript
onlyOdds(6); // => 9 (5 + 3 + 1)
// ```

// const onlyOdds= (a) => {

// }

function onlyOdds(a) {
    let sum =0;
    for(let i=0; i<=a;i++){ //dosent matter adding 0 to some sum adds no value so i can be initialixe to 0 also adding from 0 to a or a to 0 gives the same result
        if (i%2===0){
            continue;
        }
        else{
            sum=sum+i;
        }
    }
    return sum;
}