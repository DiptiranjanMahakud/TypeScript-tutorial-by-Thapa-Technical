"use strict";
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`this is ${this.color} circle with radius ${this.radius}`);
    };
}
class Rectangle extends Shape {
    color;
    width;
    length;
    constructor(color, width, length) {
        super(color);
        this.color = color;
        this.width = width;
        this.length = length;
    }
    calculateArea() {
        return this.length * this.width;
    }
    displayArea = () => {
        console.log(`this is ${this.color} circle with length ${this.length}`);
    };
}
class Square extends Shape {
    color;
    length;
    constructor(color, length) {
        super(color);
        this.color = color;
        this.length = length;
    }
    calculateArea() {
        return this.length * this.length;
    }
    displayArea = () => {
        console.log(`this is ${this.color} circle with length ${this.length}`);
    };
}
const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 9, 8);
const square = new Square("green", 9);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
console.log(square.calculateArea());
