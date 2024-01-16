class MathOperations{
    public static PI:number=Math.PI;
    public static add(num1:number, num2:number){
        return num1+num2;
    }
    public static sub(num1:number, num2:number){
        return num1-num2;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(8,9));
console.log(MathOperations.sub(8,3));
