const product ={
    name:"Parker",
    rating:4.3,
    offer:7,
    price:230
};
console.log(product);

const profile={
    userName:"ron_at_101",
    isVarified :true,
    followers:'345k',
    following:456,
};
console.log(profile, typeof profile.isVarified);

let nums=100;
for(let i=1;i<=nums;i++){
    if(i%2!==0)
    console.log("nums =",i);
}

// let gameNum=25;
// let userNum=prompt("Guess The Number");
// while(userNum != gameNum){
//     userNum=prompt("You entered a wrong number ! guess again")
// }
// console.log("congratulations you guessed the rigth number");

//Tamplet literals 
let obj={
    item:'pen',
    price:10,
}
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("The cost of", obj.item,"is",obj.price,"rupees");
//String
let str="the rock is cooking";
let newstr = str.toUpperCase();
console.log(str); console.log(newstr);

let str2="HEAD OF THE TABLE";
let newstr2 = str2.toLowerCase();
console.log(str2); console.log(newstr2);
//Slice
let stri="123456789";
console.log(stri.slice(2,4));
console.log(stri.slice(4));


str="the rock is cooking";
str2=" HEAD OF THE TABLE ";
console.log(str .concat(str2));
console.log("Yeet" + str + str2 + 123);

let s="Ronat";
console.log(s.replace("a","aa"));
console.log(s.charAt(4));
console.log(s.indexOf("t"));

// let fullName=prompt("Enter your fullname without any spaces");
// let useerName="@"+fullName+fullName.length;
// console.log(useerName);

let marks=[67,78,56,59,80,50];
let sums=0;
for(let val of marks){
    sums+=val;
}
let avg = sums/marks.length;
console.log(`The average marks of the student is = ${avg}`);

let items=[259,645,300,546,887];
// let i=0;
// for(vall of items){
//     console.log(`Value at index ${i}=${vall}`);
//     let offer=vall/10;
//     items[i]=items[i]-offer;
//     console.log(`Value after offer is ${items[i]}`);
//     i++;
// }
items=[259,645,300,546,887];
for(let ii=0;ii<items.length;ii++){
    let offer = items[ii]/10;
    items[ii]-=offer
}
console.log(items);

function myFunc(msg){
    console.log(msg);
}
myFunc("I II III");

function countVowel(str){
    let count=0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i'|| char === 'o' || char === 'u');{
            count++;
        }
    }
    console.log(count);
}

let numarr=[45,78,89,43];
numarr.forEach((num)=>{
    console.log(num ** 2);
});