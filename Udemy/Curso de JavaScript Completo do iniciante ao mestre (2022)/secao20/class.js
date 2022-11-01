// ES5
function Animal(tipo){
    if(this instanceof Animal){
        if(tipo){
            this.tipo = tipo;
        }
    }else{
        throw new Error("Animal must be created with new operator"); 
    }
}

// Cachorre extendendo de animal 
function Cachorro(nome){
    this.nome = nome;
    Animal.call(this, "mamifero");
    this.constructor = Cachorro;
}
Cachorro.prototype = new Animal("mamifero"); 
let dog = new Cachorro("dog");

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

Animal.prototype.tipo = "desconhecido";

// ES6

class AnimalC {
    constructor(tipo){
        if(tipo) this.tipo = tipo;
        // this.tipo = tipo;
    }

    obterTipo(){
        return this.tipo;
    }

}

class GatoC extends AnimalC{
    constructor(nome){
        super("mamifero");
        this.nome = nome;
    }
}

AnimalC.prototype.tipo = "desconhecido";

let animal = new AnimalC("anfibio");
let sapo = new AnimalC();

let migal = new GatoC("mingal");
console.log(migal);


// console.log(typeof animal, animal); // objetos
// console.log(typeof gato,gato); // objeto
// console.log(typeof Animal, Animal);
// console.log(typeof AnimalC, AnimalC);
// console.log(typeof animal.obterTipo(), animal.obterTipo());
// console.log(typeof gato.obterTipo(), gato.obterTipo());

// console.log(typeof Animal.prototype, Animal.prototype);
// console.log(typeof AnimalC.prototype, AnimalC.prototype);
