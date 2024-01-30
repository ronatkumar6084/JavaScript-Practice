const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
const time = "14:34:56";
console.log(timeRegex.test(time));
const time2 = "24:56:23";
console.log(timeRegex.test(time2));

let name = prompt("Hello");
console.log(name);
let num =prompt("enter a number");
if (num%5===0)
    console.log(num,"number is multiple of 5");
else
    console.log(num,"number is not multiple of 5");