abstract class Iemployee{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}
class employee extends Iemployee{
    id:number;
    makeSound(): void {
        console.log("woof!");
    }
}