abstract class Shape{
    constructor(protected color:string){}

    abstract calculateArea():number;
    abstract displayArea:()=>void;
}

class Circle extends Shape{
    constructor(protected color:string, protected radius:number){
        super(color);
    }
    public calculateArea():number{
        return Math.PI *this.radius*this.radius;
    }
    displayArea=():void=>{
        console.log(`this is ${this.color} circle with radius ${this.radius}`);
    };
}

class Rectangle extends Shape{
    constructor(protected color:string, protected width:number, protected length:number){
        super(color);
    }
    public calculateArea():number{
        return this.length*this.width;
    }
    displayArea=():void=>{
        console.log(`this is ${this.color} circle with length ${this.length}`);
    };
}


class Square extends Shape{
    constructor(protected color:string, protected length:number){
        super(color);
    }
    public calculateArea():number{
        return this.length*this.length;
    }
    displayArea=():void=>{
        console.log(`this is ${this.color} circle with length ${this.length}`);
    };
}
const circle=new Circle("red",5);
const rectangle=new Rectangle("blue",9,8);
const square =new Square("green",9);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
console.log(square.calculateArea());