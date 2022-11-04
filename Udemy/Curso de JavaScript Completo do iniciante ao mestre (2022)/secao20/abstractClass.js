class Animal {
    constructor(tipo){
        console.log(this.constructor);
        if(this.constructor === Animal){
            throw new Error("Animal is an abstract class, can not be instanciated!");
        }
        if(tipo){
            this.tipo = tipo;
        }
    };

    comer(){
        // console.log(`${this.tipo} esta comendo`);
        throw new Error("Method 'comer()' must be implemented!");
    }
}

class Gato extends Animal{
    constructor(nome){
        super("mamifero");
        this.nome = nome;
    };
    comer(){
        console.log(`${this.nome} está comendo!`);
    }
}

const animal = new Animal("mamifero");
const mingal = new Gato("mingal");