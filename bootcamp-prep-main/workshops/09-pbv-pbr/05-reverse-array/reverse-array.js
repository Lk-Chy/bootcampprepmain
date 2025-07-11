// YOUR CODE BELOW
function reverseArray(arr){
    let  temp =[];
    n=arr.length;
    for (let i = 0; i< arr. length; i++){
        temp.push(arr[i]);
    }
    for(let i=0; i<=n-1; i++){
        arr[i]=temp[n-i-1];
    }
    return arr;
}