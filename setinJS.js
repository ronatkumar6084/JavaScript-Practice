//Set is a data structure which holds unique values only. It's a collection which holds unique values.Set is a unordered means it  will no follow in the order you added but in JavaScript in follows order.It'll not have a index value.
let nums = new Set("AmericanNightmare"); 
console.log(nums);

let nu = new Set();
nu.add(3); //.add() to add objects in set
nu.add(8);
nu.add(3);
nu.add('Ronat');
nu.add('Tuborg');
nu.add('KingFisher');
console.log(nu.has(3));
console.log(nu.has(0));
console.log(nu.has('KingFisher')); //.has() to check object is present or not in set.
console.log(nu.has('Kingfisher'));
nu.forEach(values =>{
    console.log(values)
})