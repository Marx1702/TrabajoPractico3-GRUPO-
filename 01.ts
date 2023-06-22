// Inicializar un proyecto de nodejs configurado para TypesCript ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferentea

abstract class Animal {
protected nombre: string;

constructor(nombre: string) {
    this.nombre = nombre;
}

abstract HaceSonido(): void;
}

class Perro extends Animal {
HaceSonido(): void {
    console.log(this.nombre + " ladra");
}
}

class Gato extends Animal {
HaceSonido(): void {
    console.log(this.nombre + " maulla");
}
}

const Perro1 = new Perro("Arcel");
Perro.HaceSonido(); // Output: Bobby says Woof!

const Gato1 = new Gato("Minina");
Gato.HaceSonido(); // Output: Kitty says Meow!
