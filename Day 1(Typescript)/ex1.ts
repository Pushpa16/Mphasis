class person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    greet():void{
        console.log(`hello, my name is ${this.name}`);
    }
}
class student extends person{
    grade:number;
    constructor(name:string, grade:number)
    {
        super(name);
        this.grade=grade;
    }
    displayInfo():void{
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}
//constructor method
const students=new student("pushpa",9)
students.displayInfo();

students.greet();