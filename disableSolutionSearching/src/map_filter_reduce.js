"use strict";
//ex-1:
// let array1:string[]=["jayee","sami","lipunu"];
// const array2:number[]=array1.filter((curName:string)=>
//              curName.length > 4
// );
// console.log(array2);
//ex-2:
const names = ["Alice", "Bob", "Anna", "Andrew"];
const array3 = names.filter((curName) => curName.charAt(0) === 'A');
console.log(array3);
