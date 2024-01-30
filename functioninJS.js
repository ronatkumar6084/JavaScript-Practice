function myFunc(){
    console.log('learning js');
    console.log('Welcome to my house');
    console.log('learning js');
    console.log('Welcome to my house');
};
myFunc(); 
myFunc();

function myFunc2(msg,msg2){
    console.log(msg+" "+msg2);
}
myFunc2('we the ones','yeet')

function sum(x,y){
    let s = x + y;
    console.log(x);
    console.log(y);
    return s;
    console.log('after return');
}
console.log(sum(456,678));

//Arrow Function
const arrSum=(a,b)=>{
    console.log(a+b);
}
arrSum(3,5);

const arrMul=(c,d)=>{
    return c*d;
};
console.log(arrMul(7,8));

const printHello = ()=>{
    console.log("Hello");
};
printHello();

function countVowel(str){
    let count=0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log(count);
}
countVowel('acknowledge me');

const countVow = (str)=>{
    let count=0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log(count);
}
countVow('Acknowledge me');

//forEach
let arr=[78,89,90,56,78];
arr.forEach(function myarr(val){
    console.log(val);
});

let arrStr=["BBSR","Delhi","Pune"];
arrStr.forEach((vall)=>{
    console.log(vall.toLowerCase());
});

let rr=[7,8,9,0,1];
rr.forEach((element,i,rr)=>{
    console.log(element,i,rr);
});

let numArr=[6,8,9,4,22];
numArr.forEach((num)=>{
    console.log(num ** 2);
});

let calculate = (num) =>{
    console.log(num**2);
};
numArr.forEach(calculate);

//map method
let num=[67,98,90,34]
let newArr=num.map((val)=>{
    return val * 2;
});
console.log(newArr);
console.log(num);

//filter method
let arrFil=[1,2,3,4,5,6,7,8,9,0]
let newArrFil = arrFil.filter((val)=>{
    return val % 2 === 0;
});
console.log(newArrFil);
console.log(arrFil);

//reduce method
let arrRed=[5,6,7,8]
const output=arrRed.reduce((res,cur)=>{
    return res+cur;
});
console.log(output);

let grt=[6,9,8,7,90]
const newGrt = grt.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});
console.log(newGrt);
console.log(grt);

//practice ques
let marks=[67,87,78,56,80]
let newMarks = marks.filter((val)=>{
    return val > 75;
});
console.log(newMarks);
console.log(marks);

let n = prompt("Enter the number");
let r=[];
for(let i=1;i<=n;i++){
    r[i-1]=i;
};
console.log(r);