// // YOUR CODE BELOW

// // ### Bacteria Time

// // Define a function, `bacteriaTime`, that accepts two arguments:
// //   1. currentNum (num) - number of starting bacteria
// //   2. targetNum (num) - desired number of bacteria

// // Assuming that the number of bacteria double every 20 minutes, `bacteriaTime` should
// // return the number of minutes required for the number of bacteria to grow from
// // the currentNum to a number equal to or larger than the targetNum.

// // You can assume the currentNum will be a positive integer. If the targetNum is
// // smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.

// // ```javascript

// // ```

function bacteriaTime(currentNum, targetNum){
    let sum=0;
    debugger
if(targetNum< currentNum){
    return 'targetNum must be larger than currentNum';
}
else{
    for( let i= currentNum; i<= targetNum; i=i*2){

        if(currentNum<0 || i === targetNum){
            break;
        }
        sum=sum+20;
    }
    console.log(sum);
    debugger
    return sum;
    
}
}

bacteriaTime(1, 8); // => 60

// function bacteriaTime(a,b){
//     return 60;
// }

