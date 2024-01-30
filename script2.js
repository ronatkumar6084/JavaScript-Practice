//alert("hello");
// document.body.childNodes[1].innerText="abcd";
//console.log(window);
let btn1=document.querySelector('#btn1');
btn1.onclick =()=>{
    console.log('btn1 was clicked');
    let a=35;
    a++;
    console.log(a);
};

btn1.addEventListener('click',(evt)=>{
    console.log('btn1 was clicked');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
});

let btn2=document.querySelector('#btn2');
btn2.ondblclick=()=>{
    console.log('btn2 clciked 2 times');
    let b=87;
    b--;
    console.log(b);
};

btn2.addEventListener('dblclick',()=>{
    console.log('btn2 clicked');
});

let parahs=document.querySelectorAll('p');
console.log(parahs);
parahs.innerText="qwerty";

let div=document.querySelector('div');
div.onmouseover=(evt)=>{
    div.style.backgroundColor="black";
    console.log('you are in div');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}
div.onmouseout=()=>{
    div.style.backgroundColor="blue";
    console.log('you are out of div');
}
//darkmode,lightmode
let modbtn=document.querySelector('#mode');
let body=document.querySelector('body')
let currmod="light";
mode.addEventListener('click',()=>{
    if(currmod==='light') {
        currmod='dark';
        // body.style.backgroundColor="black";
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        currmod='light';
        // body.style.backgroundColor="rgb(48, 174, 176)";
        body.classList.add('light');
        body.classList.remove('dark');
    }
    
    console.log(currmod);
});

let h2 = document.querySelector('h2');
console.dir(h2.innerText);
h2.innerText=h2.innerText + "Fom Apna College";

// let divs=document.querySelectorAll('box');
// console.log(divs);
// divs[0].innerText="new unique value 0";
// divs[1].innerText="new unique value 1";
// divs[2].innerText="new unique value 2";
// let idx=1;
// for (divvv of divs){
//     divvv.innerText=`new unique value ${idx}`;
//     idx++;
// }
// let divh=document.querySelector('div')
// console.log(divh);
// let id=divh.getAttribute('id');
// console.log(id);
// let name=divh.getAttribute('name');
// console.log(name);
// let para=document.querySelector('p');
// console.log(para.getAttribute('class'));
// console.log(para.setAttribute('class','newClass'));


let newBtn=document.createElement('Button');
newBtn.innerText="clcik me";
console.log(newBtn);