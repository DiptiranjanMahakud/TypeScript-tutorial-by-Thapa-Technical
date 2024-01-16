// type Stud={
//     name:string;
//     age:number;
// }

// type studentAdd={
//     city:string;
//     state:string;
// }

// type Data =studentAdd | Stud;  //in interface we can achive this through inheritance.

// const BioData:Data={
//     name:"dipti",
//     city:"bhadrak",
//     state:"odisha"
// }
//console.log(BioData);












// interface Stud {
//     name:string;
//     age:number;
// }

// interface studentAdd {  
//     city:string;
//     state:string;
// }

// interface Data extends studentAdd , Stud{};  //in interface we can achive this through inheritance.

// const BioData:Data={
//     name:"dipti",
//     age:9,
//     city:"bhadrak",
//     state:"odisha"
// }
// console.log(BioData);












// //if two interface name is same we can do like this.
// interface Stud {
//     name:string;
//     age:number;
// }

// interface Stud{  
//     city:string;
//     state:string;
// }

// interface Data extends Stud{};  //in interface we can achive this through inheritance.

// const BioData:Data={
//     name:"dipti",
//     age:9,
//     city:"bhadrak",
//     state:"odisha"
// }
// console.log(BioData);






interface Stud {
    name:string;
    age:number;
}

interface StudAdd{  
    city:string;
    state:string;
}

interface Data extends Stud,StudAdd{};  //in interface we can achive this through inheritance.

class BioData implements Data {
    constructor(public name:string, public age:number, public city:string, public state:string ){}
}

const std1=new BioData("vinod",9,"bdk","odisha");
console.log(BioData);
