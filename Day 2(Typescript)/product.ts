interface I_User{
    id:number;
    name:string;
    email:string;
    salary:number;
    company:string;
}
interface I_Inventory extends I_User {
    id:number;
    custid: number;
    prodid: number;
    name:string;
    price:number;
    stock:string;
    orderDate:string;
    qty:number;
}
class customer implements I_User{
    constructor(public id:number, public name:string, public email:string, public salary:number, public company:string)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.salary=salary;
    }
    getDetails():void{
        console.log(`ID: ${this.id}, name:${this.name},email:${this.email}, salary:${this.salary}`)
    }
}
class supplier implements I_User{
    constructor(public id:number, public name:string, public email:string, public salary:number, public company:string)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.company=company;
    }
    getDetails():void{
        console.log(`ID: ${this.id}, name:${this.name},email:${this.email}, company:${this.company}`)
}
}
class product implements I_Inventory{
    constructor(public id:number, public name:string, public price:number, public stock:string, public orderDate:string, public qty:number, public email:string, public salary:number, public company:string, public custid:number, public prodid:number)
    {
        this.id=id;
        this.name=name;
       this.price=price;
       this.stock=stock;
    }
    getDetails():void{
        console.log(`ID: ${this.id}, name:${this.name},price:${this.price}, stock:${this.stock}`)
}
}
var qty1:number=10;
class order implements I_Inventory{
    constructor(public id:number, public name:string, public price:number, public stock:string, public orderDate:string, public qty:number, public email:string, public salary:number, public company:string ,public custid:number, public prodid:number)
    { this.id;
       qty1=qty;
       this.orderDate=orderDate;
    }
    getDetails():void{
        console.log(`ID: ${this.id}, name:${this.name},qty:${qty1}, orderdate:${this.orderDate}`)
}
}
const cust= new customer(1, 'pushpa','push@gmail.com',300,'Mphasis');

cust.getDetails();


const ode=new order(10,'pushpa',15000,'Mphasis','push',qty1,'push@',73,'hi',63,69) ;
console.log(ode);
ode.getDetails();
