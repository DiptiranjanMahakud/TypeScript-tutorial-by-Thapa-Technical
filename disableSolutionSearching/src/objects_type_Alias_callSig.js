"use strict";
// const person={name:"dipti",age:22,isStudent:true,address:{city:"bhadrak",country:"india"},field:"IT"}
const student1 = { name: "vinod", age: 34, gender: "male",
    greet: (country) => `welcome ${student1.name} & ur age ${student1.age} from ${country}`
};
const student2 = { name: "thapa", age: 23, gender: "male",
    greet: (country) => `welcome ${student2.name} & ur age ${student2.age} from ${country}`
};
console.log(student1.greet("india"));
console.log(student2.greet("nepal"));
