// // YOUR CODE BELOW
// ### Say Your Name

// Create a new object, `me2`. Expand the `myGreeting` method from me so it accepts
// another object with a name property. The returned greeting should now greet the
// other object by name.

// ```javascript
// console.log(me2.name); // 'Tarana'
// console.log(you.name); // 'Alyssa'
// me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
// ```


// let me2={
// name : '',
// myGreeting(obj){
//     return 'Hi '+obj.name +', my name is '+me2.name;
// }


// }



let me2 = {
  name: 'Tarana',
  getGreeting(obj) {
    return 'Hi ' + obj.name + ', my name is ' + this.name + '.';
  }
};
