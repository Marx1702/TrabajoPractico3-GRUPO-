abstract class Animal {
protected name: string;

constructor(name: string) {
    this.name = name;
}

abstract makeSound(): void;
}

class Dog extends Animal {
makeSound(): void {
    console.log(this.name + " says Woof!");
}
}

class Cat extends Animal {
makeSound(): void {
    console.log(this.name + " says Meow!");
}
}

// Intentar instanciar la clase abstracta dará un error
// const animal = new Animal("Animal"); // Error: No se puede crear una instancia de una clase abstracta

const dog = new Dog("Bobby");
dog.makeSound(); // Output: Bobby says Woof!

const cat = new Cat("Kitty");
cat.makeSound(); // Output: Kitty says Meow!
