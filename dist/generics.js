"use strict";
// function logAndReturn<T>(value:T):T{
//     return value;
// }
// const numRes:number=logAndReturn<number>(77);
// const boolRes:boolean=logAndReturn<boolean>(true);
// console.log(numRes);
// console.log(boolRes);
// function add<T>(a:T,b:T):void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const result1:void=add<number>(5,8);    
// const result2:void=add("hello","eshu");  //<string> auotmatically done
// function add<T,U>(a:T,b:U):void{
//     console.log(typeof a);
//     console.log(typeof b);
// }
// const result1:void=add<number,string>(5,"baigan");    
// const result2:void=add("hello",0);    //<number,string> either write this or not bcz ts will automatically infer.
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
const result1 = add(5, "baigan", true);
const result2 = add("hello", 0, false);
