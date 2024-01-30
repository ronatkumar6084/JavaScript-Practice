// let promise = new Promise((resolve,reject)=>{
//     console.log('I m a promise');
//     //resolve(123);
//     reject("some erroor");
// });

// const getPromise = ()=>{
//    return new Promise((resolve,reject)=>{
//     console.log('I m a promise');
//     //resolve("success");
//     reject('error')
// });
// };
// let promise = getPromise();
// promise.then(()=>{
//     console.log("fullfilled");
// });
// promise.catch(()=>{
//     console.log('rejected');
// })
// console.log(promise);

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //console.log("data",dataId);
//             //resolve("success");
//             reject("error")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// };
// let promise = getData(123);
// //console.log(getData(123));
// console.log(promise);

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data 1');
            resolve('success');
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data 2');
            resolve('success');
        },4000);
    });
}

console.log('fetching data 1...');
asyncFunc1().then((res)=>{
    console.log('fetchinf data 2...');
    asyncFunc2().then((res)=>{

    });
});