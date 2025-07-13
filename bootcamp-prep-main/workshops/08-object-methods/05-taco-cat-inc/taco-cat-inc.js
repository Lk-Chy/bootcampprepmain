let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
// tacoCatInc.currentInventory = function(){
//   debugger
// let sum = 0;
// let keys = Object.keys(tacoCatInc); // [gourmetShell, gourmetFishFilling, gourmetVeggie, gourmetSeasoning] 
// for(let i = 0; i<keys.length; i++){
//   let key = keys[i];  //gourmetShell --> it is an object
//   let ke = Object.keys(key); //[hard treat shell ,soft treat shell]
//   for(let expn in ke){
//     let abc = 0;
//     abc = ke.cost * ke.quantity;
//     sum=sum+abc;
//   }
//   // sum = abc+sum;
// }
//   return sum;
// }


tacoCatInc.currentInventory = function() {
  let sum = 0;
  let keys = Object.keys(tacoCatInc);
  
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]; // [gourmetShell, gourmetFishFilling, gourmetVeggie, gourmetSeasoning] 
    
    // skip non-object keys like 'cash' or 'currentInventory'
    if (typeof tacoCatInc[key] !== 'object' || tacoCatInc[key] === null) continue;
    
    let nestedKeys = Object.keys(tacoCatInc[key]);
    
    for (let j = 0; j < nestedKeys.length; j++) {
      let itemKey = nestedKeys[j];
      let item = tacoCatInc[key][itemKey];
      
      sum += item.cost * item.quantity;
    }
  }
  
  return sum;
};

tacoCatInc.sale = function (order) {
  let totalPrice = 0;
  let orderitem = Object.keys(order);
  for (let i = 0; i < orderitem.length; i++){
    let cate = orderitem[i];
    let itm_name = order[cate];
    let item = tacoCatInc[cate][itm_name];
    totalPrice += item.cost;
    item.quantity -= 1
  }
  tacoCatInc.cash += totalPrice;
  return totalPrice;
}