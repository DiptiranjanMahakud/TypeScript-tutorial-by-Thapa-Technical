"use strict";
// class Persons{name:string; age:number; hobbies:string[]; 
//     constructor(name:string, age:number, hobbies:string[]){
//         this.name=name;
//         this.age=age;
//         this.hobbies=hobbies;
//     }
//     introduce():string{return`hi i am ${this.name} and i am ${this.age} years old.i love
//     ${this.hobbies.join(",")}`
//     }
// }
// class Students extends Persons{grade:number; 
//     constructor(name:string, age:number, hobbies:string[],grade:number){
//         super(name, age, hobbies);
//         this.grade=grade;
//     } 
//     introduce():string{return`hi i am ${this.name} and i am ${this.age} years old. i am in grade ${this.grade}i love
//     ${this.hobbies.join(",")}`
//     }
// }
// const student5=new Students("dips",5,["code","sports"],7);
// console.log(student5.introduce());
//access modifier in ts
// class Persons{public name:string; protected age:number; private hobbies:string[]; 
//     constructor(name:string, age:number, hobbies:string[]){
//         this.name=name;
//         this.age=age;
//         this.hobbies=hobbies;
//     }
//     introduce():string{return`hi i am ${this.name} and i am ${this.age} years old.i love
//     ${this.hobbies.join(",")}`
//     }
// }
// class Students extends Persons{grade:number; 
//     constructor(name:string, age:number, hobbies:string[],grade:number){
//         super(name, age, hobbies);
//         this.grade=grade;
//     } 
//     introduce():string{return`hi i am ${this.name} and i am ${this.age} years old. i am in grade ${this.grade}`
//     }
// }
// const student5=new Students("dips",5,["code","sports"],7);
// console.log(student5.introduce());
// //shorthand properties.
// class Persons{
//     constructor(public name:string, public age:number, protected hobbies:string[]){}
//     introduceParent():string{return `hi i am ${this.name} and i am ${this.age} years old. i love ${this.hobbies.join(",")}`};
// }
// class Students extends Persons{
//     constructor(name:string, age:number, hobbies:string[], public grade:number)
//     {
//         super(name,age,hobbies);
//     }
//     introduce(): string {return `${this.hobbies}`;
//     }
// }
// const person1:Persons=new Persons("vinod",9,["read","play"]);
// console.log(person1.introduceParent());
// const student7:Students=new Students("vinod",9,["read","play"],1);
// console.log(student7.introduce());
//getters & setters
class Persons {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
    introduceParent() {
        return `hi i am ${this.name} and i am ${this._age} olds. i love ${this.hobbies.join(",")}`;
    }
}
const person1 = new Persons("vivekananda", ["meditate", "sleep"]);
//person1.age=986;
person1.age = 19;
console.log(person1.age);
console.log(person1.introduceParent());
