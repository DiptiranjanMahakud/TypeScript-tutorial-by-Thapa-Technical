// const person={name:"dipti",age:22,isStudent:true,address:{city:"bhadrak",country:"india"},field:"IT"}

// //accessing objects
// console.log(person.address.country);
// person.address.city='pune';  //can mutate from here.
// console.log(person.address.city);


// //Person object
// const Person:{name:string, age:number, isStudent:boolean, address:{city:string, country:string}}
//                ={
//                 name:"dinesh", age:19, isStudent:ture, address:{city:"banglore" ,country:"India"}
//                }

// //product object
// const Product:{name:string,stock:number,price:number}={name:"lays",stock:8,price:9};



//type alias
// type Person={name:string; age:number; isStudent:boolean; class?:string; address:{city:string; country:string}};

// const person1:Person={name:"Dinesh", age:34, isStudent:false, class:"1st", address:{city:"bangkock", country:"india" }};

// const person2:Person={name:"kartik", age:30, isStudent:true, class:"2st", address:{city:"new york", country:"england" }};


// //calculate total price

// type Product={name:string; price:number; quantity:number; }

// const product:Product={name:"laptop" , price:90 , quantity:10};

// const totalPrice=(prod:Product)=>{
//     return prod.price*prod.quantity;
// }

// const results=totalPrice(product);

// console.log(results);


// type Student ={name:string; age:number; gender?:string; }
// const student1:Student={name:"vinod", age:23, gender:"male"}
// const introduction:(studen1:Student)=>string=(student1:Student):string=>{
//     const {name, age, gender}=student1;  //object destructuring to extract the name, age, and gender properties from the student1 object.
//     return `age of student ${name} is ${age} and he is a ${gender}`;
// }

// console.log(introduction(student1));

// const greet=(name:string):string=>{ //The : (name: string) => string part is optional in this case, as TypeScript can infer the types from the function's implementation.
//     return `welcome ${name} u r selected`;
// }



//?call signature
type Student = {name:string; age:number; gender?:string;
    greet:(country:string)=>string; //method call signature.
    //(country:string):string //pure call signature. 
}
const student1:Student ={name:"vinod", age:34 , gender:"male",
              greet:(country):string=>
              `welcome ${student1.name} & ur age ${student1.age} from ${country}`
}
const student2:Student={name:"thapa", age:23 , gender:"male",
               greet:(country):string=>
               `welcome ${student2.name} & ur age ${student2.age} from ${country}`
}

console.log(student1.greet("india"));
console.log(student2.greet("nepal"));