//WhileLoop
let i=10;
while(i>=0){
    console.log("Hi", i);
    i--;
}
console.log(i)

let z=0;
while(z<=10){
    console.log("Hi", z);
    z++;
}
console.log(z)

//ForLoop
for(let z=1;z<=5;z++){
    console.log("Apna College",z);
}
for(let t=1;t<=5;t++){
    console.log("Hi", t);
    for(let u=1;u<=5;u++)
      console.log("Hello", u);
}
//find sum of n numbers
let sum =0;
let num=100;
for(let u=1;u<=num;u++){
    sum+=u;
}
console.log("sum =",sum);

//Infinite loop
// for(let l=1;l>0;l++){
//     console.log("l = ",l);
// }

//Do while loop
let d=1;
do{
    console.log("Tribal Chief");
    d++;
}while(d<=10);
console.log(d);

//Foor-of-loop used in strings and arrays
let str="Acknowledge";
let size=0;
for(let s of str){
    console.log("s =", s);
    size++;
}
console.log("size of string is ",size);

//For-in-loop used in objects and arrays it returns keys in object
let students={
    name:"Ronat Muni",
    age:22,
    cgpa:8.2,
    isPass:true,
};
for (let key in students){
    console.log(key,students[key]);
}
