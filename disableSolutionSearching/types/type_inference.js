"use strict";
// let name1:string="dipti"  //annotation means by user implicitly
// let name2="dips"  //inference means by compiler explicity
// let message="hello typescript"
// //compiler infers the type string to message
function calculateArea(a, b) {
    console.log("compiler infers the type number to message");
    return a * b;
}
const res = calculateArea(4, 5);
console.log(res);
