// Ways to print in JS
console.log("Hello World");
// console.alert("ME");
// JS Console API
console.warn("this is warning");
console.error("this is an error");
console.assert(4==(6-2));
// JS Variables
// container to store data values --> Variable
var number1=22;
var number2=88;
console.log(number1+number2);
// Data Types in JS
//Numbers
 var num1=55;
 var num2=55.56;
 console.log( num1,typeof num2);
 //string
var str1="This is a string";
var str2="This is also a string";

console.log(num1 , num2);
//Booleans
var a= true;
var b=false;
console.log(a, b);
let bool= 5<6
console.log(bool, typeof bool)
//undefined
var und;
console.log(und);
//null
var n=null;
console.log(n);
//array
var arr=[2,8,9,5,"dell",9,77];
console.log(arr[4]);
//function
function avg(a,b){
    c= (a+b)/2;
    return c;
}
c1=avg(5,9);
c2=avg(13,56);
console.log(c1,c2);
//conditional operator
var age = 20;
if(age>18){
    console.log('you can drink');
}
else{
    console.log('you cant drink');
}
//loops
var arrr=[1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++){
    console.log(arrr[i]);
}
//concating in JS
let firstName="Ronat"
let lastName="Muni"
console.log(firstName+" "+lastName)

let user="Ronat Muni\"ASKA\""
console.log(user)
let usert="Ro\vnat Kumar Muni"
console.log(usert)

//type conversion
let hun=String(6)
console.log(hun, typeof hun)
let hun2=Number("123")
console.log(hun2, typeof hun2)

//type coercion
let x
console.log(x, typeof x)
x=8
console.log(x, typeof x)
x=8+" "
console.log(x, typeof x)
x=x-2
console.log(x, typeof x)
x=!x
console.log(x, typeof x)
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean("Ronat"))

let x1=parseInt("123Ronat")
console.log(x1)
let foodItems=["Patato","Tamato","Chilli","capsicum","onion"];
console.log(foodItems.toString());
let mar=[45,56,78,98,12];
console.log(mar.toString());
//power
let result= 4 ** 4
console.log(result)