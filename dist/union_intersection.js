"use strict";
// //union
// const inputValue=(value:string | number |boolean):void=>{ console.log("this is working")}
// inputValue(55);
// inputValue("hello");
// inputValue(true);
const employee = { name: "vinod", age: 40 };
const emp = { name: "dipti", age: 44, emp_id: 78, department: 'IT' };
const user = { name: "vinod", age: 29 };
const myLocation = { city: "delhi", country: "india" };
//define
const createUserProfile = (user, location) => {
    // return `name${user.name} , age : ${user.age}`
    return { ...user, ...location };
};
console.log(createUserProfile(user, myLocation));
const myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
