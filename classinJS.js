// class Toyota{
//     constructor(){
//         console.log("constructor called");
//     }
//     start(){
//         console.log('Start');
//     }
//     stop(){
//         console.log('Stop');
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// };
// let fortuner=new Toyota();
// fortuner.start();
// fortuner.stop();
// let lexus=new Toyota();
// lexus.start();
// lexus.stop();

// class Person{
//     constructor(name){
//         this.spices="home sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }
// class Engineer extends Person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat();
//         console.log("solve problems build something");
//     }
// }
// let engObj = new Engineer("Ronat");

// let DATA="Secret Information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data= ",DATA);
//     }
// }
// let student1=new User("gucygc","yyguyg");
// let student2=new User("babcc","jvjcg");

let a=9;
let b=8;
console.log("a= ",a);
console.log("b= ",b);
console.log("a+b= ",a+b);
console.log("a+b= ",a+b);
try{
    console.log("a+b= ",a+c);
}catch(err){
    console.log(err);
}
console.log("a+b= ",a+b);
console.log("a+b= ",a+b);
console.log("a+b= ",a+b);

function hello(){
    console.log("Hello");
};
setTimeout(hello,2000);

setTimeout(()=>{
    console.log("Hell Yeah");
},3000);

function getData(dataId, getNextData){
   setTimeout(()=>{
    console.log("DATA = ",dataId);
    if(getNextData){
        getNextData();
    }
   },5000);
};

//call back hell
console.log('getting data 1');
getData(1,() =>{
    console.log('getting data 2');
    getData(2,()=>{
        console.log('getting data 3');
        getData(3,()=>{
            console.log('getting data 4');
            getData(4);
        });
    });
});
