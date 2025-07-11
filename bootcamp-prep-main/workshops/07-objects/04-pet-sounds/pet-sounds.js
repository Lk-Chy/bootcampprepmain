// ### Pet Sounds

// Write a function `petSounds` that takes an animal name and a country name.

// Using the globally-defined animalNoises array, `petSounds` should return a
// sentence that explains which sound the animal makes in the given country.

// ```javascript
// petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!

// petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!
// ```



let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
function petSounds(a,b){
let str='';
for(let i=0; i<a.length;i++){
  if(i===0){
    str=a[i].toUpperCase();
  }
  else{
    str=str+a[i];

  }
}
str=str+'s';
  // for(let animals of animalNoises){
  for( let animals=0; animals< animalNoises.length ; animals++)
{

  let animalobj = animalNoises[animals];  
  if(a in animalobj){
    let sounds = animalobj[a];
    let sound= sounds[b];

    return str+" in "+b+" say "+ sound; 
  }
  else{
    continue;
  }
  
    }
return "country  not found!!";
  }
