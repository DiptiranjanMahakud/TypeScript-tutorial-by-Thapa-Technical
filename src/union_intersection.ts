// //union
// const inputValue=(value:string | number |boolean):void=>{ console.log("this is working")}
// inputValue(55);
// inputValue("hello");
// inputValue(true);


// const userInput=(value:string | number ):string | number=>{
//     if(typeof value==='number'){
//         return value * 2;
//     }else if(typeof value=="string"){
//         return value.toUpperCase();
//     }else{
//         throw new Error ("invalid input data");
//     }
// }

// console.log(userInput(10));
// console.log(userInput("subscribe"));


//insertion
type Person ={name:string; age:number}
type Employee={emp_id:number; department:string}
type EmployeeDetails=Person & Employee; //insertion
type EmployeeAbout=Person | Employee; //union

const employee:EmployeeAbout={name:"vinod" , age:40};
const emp:EmployeeDetails={name:"dipti", age:44 , emp_id:78, department:'IT'};


//example
type User={name:string; age:number};
type MyLocation={city:string; country:string};

const user:User={name:"vinod", age:29};
const myLocation:MyLocation={city:"delhi",country:"india"};

//define
const createUserProfile=(user:User,location:MyLocation)=>{
   // return `name${user.name} , age : ${user.age}`
    return{...user, ...location}
}

console.log(createUserProfile(user,myLocation));

const myCompleteInfo: User& MyLocation=createUserProfile(user,myLocation);

console.log(myCompleteInfo);