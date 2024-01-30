let newBtn=document.createElement("Button");
newBtn.innerText="Clcik Me";
newBtn.style.color="white";
newBtn.style.backgroundColor="black";
document.querySelector('body').prepend(newBtn);
let para=document.querySelector('p');
console.log(para);
para.classList.add('newClass');
para.classList.remove('newClass');