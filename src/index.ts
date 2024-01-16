// console.log('i am thapa');
// let num1:number = 5; // automatic type casting  ts take num as number


//@ts-ignore

//fun define
// function Sum(a,b){
//     return a+b;
// }

//  res=Sum(4,5) //fun call
// console.log(res);

//proper ts code
function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(5,6));