async function myFunc(){
    console.log('async function');
};
console.log(myFunc());

function hello(){
    console.log("Hello");
};
setTimeout(hello,2000);

setTimeout(()=>{
    console.log("Hell Yeah");
},3000);

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("DATA = ",dataId);
           resolve('success')
           },2000);
    });
   
};
//async await
async function getAllData(){
    console.log('getting data 1...');
    await getData(1);
    console.log('getting data 2...');
    await getData(2);
    console.log('getting data 3...');
    await getData(3);
    console.log('getting data 4...');
    await getData(4);
    console.log('getting data 5...');
    await getData(5);
}
getAllData();

//promise chain
console.log('getting data 1...');
getData(1)
.then((res)=>{
    console.log('getting data 2...');
    return getData(2);
})
.then((res)=>{
    console.log('getting data 3...');
    return getData(3);
})
.then((res)=>{
    console.log('getting data 4...');
    return getData(4);
})
.then((res)=>{
    console.log(res);
})
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