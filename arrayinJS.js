var arr=[2,8,9,5,"dell",9];
arr.push(77);//
arr.pop();
arr.unshift(23);
arr.shift();
console.log(arr);
console.log(arr[4]);

let name=['Ronat','Nihar','Susil'];
name[3]='Biraj';
console.log(name);

let data=[78,'TUV',{tech:'JS'},function(){console.log("Hello Alien");}]
console.log(data);
data[3]();
//Splice method
let data2=[5,6,7,8,9];
console.log(data2.splice(2,2, 14,16));
console.log(data2);

let nums=[];
nums[0]=8;
nums[99]=7;
console.log(nums);
//For-of-loop
for(let n of nums){
    console.log(n); 
}
//For-in-loop
for(let key in nums){
    console.log(key,nums[key]);
}
//Array Destructring
let ad=[5,6,7,8]
console.log(ad);
let [a,b,c,d]=ad;
console.log(d);
console.log(a);
//Swap 2 values
let O=8;
let L=9;
[O,L]=[L,O]
console.log(O,L);
//Split Method
let words="My Name is Ronat Kumar Dell Laptop".split(' ');
console.log(words);
let[aa,bb,,...dd]=words;
console.log(dd);
//For Each
let rr=[7,8,9,0,1];
rr.forEach((element,i,rr)=>{
    console.log(element,i,rr);
});
rr.forEach(elem=>{
    console.log(elem);
});
//splice
let ar=[4,5,7,8,2,2,9];
//Delete
// ar.splice(2,2);
//add
// ar.splice(3,0,234,56);
//replace element
ar.splice(3,1,87)
console.log(ar);