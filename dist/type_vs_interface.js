"use strict";
// type Stud={
//     name:string;
//     age:number;
// }
; //in interface we can achive this through inheritance.
class BioData {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const std1 = new BioData("vinod", 9, "bdk", "odisha");
console.log(BioData);
