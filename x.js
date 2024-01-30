let x=5;
console.log(++x);
console.log(x);

let xe=6;
console.log(xe++);
console.log(xe)

//Tamplet Literal
let num1=4;
let num2=5;
let result=num1+num2;
console.log(`The addition of ${num1} and ${num2} is ${result}`);

//Objects
var marks={
    Name:"Ronat",
    Age:22,
    Laptop:{
        CPU:'i7',
        Ram:'4GB',
        Brand:'Asus'
    },
};
for(let key in marks){
    console.log(key,marks[key])
}
//  delete marks.Laptop;
//  console.log(marks);
//  console.log(marks.Laptop.Brand.length);
//  console.log(marks['Age']);
//  console.log(marks.Laptop?.Brand1?.length);
//Function
function greet(){
    console.log("Hello World")
};
greet();
//Rertun Value
function greet2(){
    return "Hello World"
}
let str = greet2();
console.log(str);
//Pass Value
function greet3(user){
    return `Hello ${user}`
}
let user="Ronat"
let str2 = greet3(user);
console.log(str2);
//Function Expression
let add=(num1,num2) =>{
    return(num1+num2)
}
let resullt=add(5,6);
console.log(resullt);

//Arrow Function
let greetu= (user) =>{
    console.log("Hello world " + user);
    return 1;
}
console.log(greetu('Ronat'));

const arrowmul=(a,b)=>{
    console.log(a*b);
}
arrowmul(2,3);

//Methods 
let Laptop={
    cpu:'i9',
    brand:'HP',
    ram:8,
    luu: function(){
        console.log("Hello");
    }
}
Laptop.luu();
//This keyword in JS
let laptop={
    cpu:'i9',
    brand:'HP',
    ram:8,
    getConfig: function(){
        console.log(this.brand);//This represents current object
    }
}
laptop.getConfig();