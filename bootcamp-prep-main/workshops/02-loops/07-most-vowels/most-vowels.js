// YOUR CODE BELOW
// ### Most Vowels

// Define a function, `mostVowels`, that accepts one argument, a string of words.

// `mostVowels` should return the word that has the most vowels.

// ```javascript
mostVowels("I am a keeper with some real rhythms"); // => keeper
// ```

// If none of the words have any vowels, return an empty string.

// ```javascript
mostVowels("try my gym"); // => ''
// ```

function mostVowels(a) {
  let pre_space = 0;
  let g = 0;
  let mostvowelword = "";
  let temp = "";

  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] === " " || i === a.length - 1) {
      let c = 0;
      temp = "";

      for (let j = pre_space; j < i; j++) {
        temp = temp + a[j];
        if (
          a[j] === "a" ||
          a[j] === "e" ||
          a[j] === "i" ||
          a[j] === "o" ||
          a[j] === "u" ||
          a[j] === "A" ||
          a[j] === "E" ||
          a[j] === "I" ||
          a[j] === "O" ||
          a[j] === "U"
        ) {
          c++;
        }
      }

      if (c > g) {
        g = c;
        mostvowelword = temp;
      }

      pre_space = i + 1;
    }
  }
  if (g === 0) {
    return "";
  } else {
    return mostvowelword;
  }
}

// function mostVowels(a) {
//     let pre_space = 0;
//     let g = 0;
//     let mostvowelword = '';
//     let temp = '';

//     for (let i = 0; i <= a.length; i++) {
//         if (a[i] === ' ' || i === a.length) {
//             let c = 0;
//             temp = '';

//             for (let j = pre_space; j < i; j++) {
//                 temp += a[j];

//                 if (a[j] === 'a' || a[j] === 'e' || a[j] === 'i' || a[j] === 'o' || a[j] === 'u' ||
//                     a[j] === 'A' || a[j] === 'E' || a[j] === 'I' || a[j] === 'O' || a[j] === 'U') {
//                     c++;
//                 }
//             }

//             if (c > g) {
//                 g = c;
//                 mostvowelword = temp;
//             }

//             pre_space = i + 1;
//         }
//     }
// if( g===0){
//     return "''"
// }
// esle {
//     return mostvowelword
// }
// }

// function mostVowels(a){
// let pre_space = 0;
// let g = 0;
// let mostvowelword = ''
// temp =''
// for(let i = 0; i< a.length;i++){

//     let c=0;
//     if(a[i]===" "){
//         for( let j=pre_space; j<i; j++)
//             {
//                 temp[j]= temp+a[j];
//             if( a[j]==='a' || a[j]==='e' || a[j]==='i' || a[j]==='o' || a[j]==='u'){
//                 c=c+1;
//             }
//         }
//      pre_space=i;
//      if(g>c){
//         g=c;
//         mostvowelword = temp;

//     }
//     }
// }
// return mostvowelword;
// }
