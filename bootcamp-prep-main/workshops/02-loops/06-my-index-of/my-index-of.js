// // YOUR CODE BELOW

function myIndexOf(source, searchValue, startIdx=0) {
    let a = -1;
// i use deafult parameter
    // If searchValue has more than one character
    if (searchValue.length > 1) {

        for (let i = startIdx; i <= source.length - searchValue.length; i++) {
            let b = '';
            for (let j = 0; j < searchValue.length; j++) {
                b += source[i + j];
            }

            if (b === searchValue) {
                a = i;
                break;
            }
        }

    } else {
        // Single character search
        if (startIdx !== undefined) {
            for (let i = startIdx; i <= source.length - 1; i++) {
                if (source[i] === searchValue) {
                    a = i;
                    break;
                }
            }
        } else {
            for (let i = 0; i <= source.length - 1; i++) {
                if (source[i] === searchValue) {
                    a = i;
                    break;
                }
            }
        }
    }

    return a;
}




// function myIndexOf(source, searchValue, startIdx)
// {
// let a=-1;
// let b='';

// if(searchValue.length>1){
//     {
//     if(startIdx !== undefined){
//         for (let i = startIdx; i<=source.length; i++)
//         {
//             for(let j=i; j<=searchValue.length; j++){
//                 b=b+source[j];
//             }
//             if(b===searchValue){
//                 a=i-searchValue.length;
//                 break;
//             }

//         }
//     }
//     else {
//         for (let i = 0; i<=source.length; i++)
//         {
//             for(let j=i; j<=searchValue.length; j++){
//                 b=b+source[j];
//             }
//             if(b===searchValue){
//                 a=i-searchValue.length;
//                 break;
//             }


//     }
//     }
// }

//     }
//     else{
//         if(startIdx !== undefined){
// for(let i=startIdx; i<=source.length -1 ; i++){
//            if(source[i] === searchValue){
//             a=i;
//             break;
//         }
// }
// }
// else{
//     for(let i= 0; i<=source.length -1 ; i++){
//         if(source[i] === searchValue){
//             a=i;
//             break;
//         }
//     }
// }

//     }
//     return a;
// }


// // if(startIdx !== undefined){
// // for(let i=startIdx; i<=source.length -1 ; i++){
// //            if(source[i] === searchValue){
// //             a=i;
// //             break;
// //         }
// // }
// // }
// // else{
// //     for(let i= 0; i<=source.length -1 ; i++){
// //         if(source[i] === searchValue){
// //             a=i;
// //             break;
// //         }
// //     }
// // }
