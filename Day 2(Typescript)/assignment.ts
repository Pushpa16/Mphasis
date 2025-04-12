abstract class Iemployee{
    name:string
    id:number;
    constructor(name:string,id:number){
        this.name=name;
    }
}
class employee extends Iemployee{
    id:number;
    makeSound(): void {
        console.log("woof!");
    }
}