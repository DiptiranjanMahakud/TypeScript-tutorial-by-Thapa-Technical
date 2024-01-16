"use strict";
// let myFavNum1=5;
// //myFavNum1="vinod";    wrong
// let myFavNum2:any=987;
// myFavNum2="dk";
// myFavNum2=true;
// let num2:unknown;
// num2=4;
// num2=true;
// num2="thapa";
// if(typeof num2==="number"){
//     console.log(num2+6);
// }else if(typeof num2==="boolean"){
//     console.log(num2);
// }else if(typeof num2==="string"){
//     console.log(num2)
// }else{
//     console.group('not from the above');
// }
// console.log(876);
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
async function processData() {
    const response = await fetchData();
    if (typeof response === 'object') {
        console.log('it is a object');
    }
}
