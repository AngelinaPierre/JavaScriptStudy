// factory functions

// objeto que guarda as funções
const cachorroProto = {
    latir(){
        console.log(`${this.name} está latindo!`);
    },
    andar(distancia){
        this.posicao += distancia;
        console.log(`${this.name} andou ${this.distancia} m`);
    }
}

function criarCachorro(name){
    let posicao = 0;

    const obj = {
        name,
        get posicao(){
            console.log(`a posição atual de ${this.name} é ${posicao}`);
            return posicao;
        },
        set posicao(newPosition){
            console.log(`a nova posição atual de ${this.name} é ${newPosition}`);
            posicao = newPosition;
        }
    }

    // vinculando ao prototype de Object
    Object.setPrototypeOf(obj,cachorroProto );

    return obj;
}

let dog1 = criarCachorro("dog1");
let dog2 = criarCachorro("dog2");


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
    // this.constructor = Cachorro;
    this.comer = function(){
         console.log(`${this.nome} está comendo`)
    }
}

Cachorro.prototype = new Animal("mamifero"); 
Cachorro.prototype.constructor = Cachorro;
Cachorro.prototype.latir = function(){
    console.log(`${this.nome} está latindo!`);
}

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
        this.comer = function(){
            console.log(`${this.nome} está comendo`);
        }
    }
}

AnimalC.prototype.tipo = "desconhecido";

let animal = new AnimalC("anfibio");
let sapo = new AnimalC();

let migal = new GatoC("mingal");
console.log(migal);
console.log(dog);


// console.log(typeof animal, animal); // objetos
// console.log(typeof gato,gato); // objeto
// console.log(typeof Animal, Animal);
// console.log(typeof AnimalC, AnimalC);
// console.log(typeof animal.obterTipo(), animal.obterTipo());
// console.log(typeof gato.obterTipo(), gato.obterTipo());

// console.log(typeof Animal.prototype, Animal.prototype);
// console.log(typeof AnimalC.prototype, AnimalC.prototype);
