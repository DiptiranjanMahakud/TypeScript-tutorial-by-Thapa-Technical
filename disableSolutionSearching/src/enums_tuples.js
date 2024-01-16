"use strict";
// //enum
// enum Roles{
//     user="user",  //bydefault value is 0
//     admin="admin"  //bydefault value is 1
// }
// type LoginDetails={name?:string; email:string; password:string; role:Roles}
// const user1:LoginDetails={
//     email:"thapa@gmail.com",
//     password:"thapa",
//     role:Roles.admin
// }
// const user2:LoginDetails={
//     email:"bahadur@gmail.com",
//     password:"bahadur",
//     role:Roles.user
// }
// const isAdmin=(user:LoginDetails):string=>{
//     const {name, email, role}=user;
//     return role==="admin"?`${email} is allow to edit the website`:`${email} is allow not to edit the website`
// }
// console.log(isAdmin(user1));
//tuples
// //define tuples
// type PersonInfo=readonly[string,number,boolean];
// //function to display personInfo 
// const displayPersonInfo=(person:PersonInfo)=>{
//     const [name,age,hasDrivingLicence]=person;
//     console.log(`name: ${name}, age: ${age}, has licence: ${hasDrivingLicence?"yes":"no"}`);
// }
// //example usage
// const person1:PersonInfo=['vinod',29,true];
// const person2:PersonInfo=['diptesh',39,false];
// displayPersonInfo(person1);
// displayPersonInfo(person2);
