function Alien(name,tech){
    this.name=name,
    this.tech=tech,
    this.work=function(){
        console.log("Solving problem");
    }
}
let alien1 = new Alien('Ronat','Js');
let alien2 = new Alien('Sumsil','Java');
alien1.tech='C++';
console.log(alien1);
console.log(alien2);
alien1.work();

// const student={
//     fullName:"Ronat Muni",
//     marks:78.87,
//     printMarks:function (){
//         console.log("marks= ",this.marks);
//     },
// };

const employee={
    calcTax1(){
        console.log("tax rate 10%");
    },
    calcTax2: function(){
        console.log("tax rate 10%");
    }
}
employee.calcTax1();
employee.calcTax2();
const newEmp={
    salary:50000,
    calcTax1(){
        console.log("tax rate 20%");
    }
};
newEmp.__proto__=employee;
console.log(newEmp);
newEmp.calcTax1();