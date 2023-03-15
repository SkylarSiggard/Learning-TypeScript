export {};
//* In this example, we have two classes: Animal and Dog. Animal is a base class that has a name and age property, 
//* as well as a speak() method that logs a greeting to the console. Dog extends Animal and adds a breed property. 
//* It also overrides the speak() method to log a bark instead of a greeting.
//* We then create an instance of Dog called dog1 with the name "Fido", age 2, and breed "Labrador". 
//* We call the speak() method on dog1, which logs "Fido barks!" to the console.
//* This is just a simple example, but it demonstrates how TypeScript can be used to create classes and inherit from 
//* them using object-oriented programming principles.

class Animal {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public speak(): void {
        console.log(`${this.name} says hello!`);
        }
    }

class Dog extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public speak(): void {
        console.log(`${this.name} barks!`);
        }
}

const dog1 = new Dog("Fido", 2, "Labrador");
console.log(dog1.speak());

