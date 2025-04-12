// abstract
abstract class Animal{
    abstract makeSound(): void;
    move():void{
        console.log("Moving...");
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log("woof!");
    }
}
const ans= new Dog();
ans.makeSound();
ans.move();