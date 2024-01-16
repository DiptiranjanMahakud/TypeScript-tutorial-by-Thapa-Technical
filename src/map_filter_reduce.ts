//ex-1:
// let array1:string[]=["jayee","sami","lipunu"];
// const array2:number[]=array1.filter((curName:string)=>
//              curName.length > 4
// );
// console.log(array2);

//ex-2:
const names:string[]=["Alice","Bob","Anna","Andrew"];
const array3:string[]=names.filter((curName:string)=>
             curName.charAt(0)==='A')
console.log(array3);