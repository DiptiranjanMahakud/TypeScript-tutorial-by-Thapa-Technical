// //1. Bank account balance 

// class BanckAccout{
//     private _balance:number=0;

//     public get balance():number{
//         return this._balance;
//     }
//     public set balance(newBalance:number){
//         if(newBalance < 0){
//             throw new Error("Invalid balance");
//         }
//         this._balance=newBalance;
//     }
// }

// const account=new BanckAccout();
// account.balance=50000;
// console.log(account.balance);







//2.Temparature converter
class Temperature{
    private _celsius:number=0;


    public get celsius():number{
        return this._celsius;
    }
    public set celsius(newCelsius:number){
        this._celsius=newCelsius;
    }
    public get farenheit():number{
        return(this._celsius*9)/5+32;
    }
    public set farenheit(newFah){
        this._celsius=(newFah-32)*5/9;
    }
}

const temp =new Temperature();
temp.celsius=25;
//console.log(temp.celsius);
console.log(temp.farenheit);

temp.farenheit=77;
console.log(temp.celsius);