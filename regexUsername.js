const usernameRegex = /^\w+$/;
const username= "my_username_123";
console.log(usernameRegex.test(username));
const username2= "ronat";
console.log(usernameRegex.test(username2));

let a=7; //Number
let b="7"; //String
console.log(a===b); //False
console.log(a==b); //true

let age=56;
let result= age>=18 ? "Adult":"Not adult";
console.log(result);