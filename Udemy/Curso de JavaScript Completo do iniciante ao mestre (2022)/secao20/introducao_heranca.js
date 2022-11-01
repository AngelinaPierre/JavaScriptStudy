function Animal(tipo){
    if(tipo){
        this.tipo = tipo;
    }
}


Animal.prototype.obterTipo = function(){
    return this.tipo;
}

Animal.prototype.tipo = "desconhecido";

function Cachorro(nome, tipo){
    this.nome = nome;
    Animal.call(this,tipo);
    // this.constructor = Cachorro;

    // Object.defineProperty(Cachorro.prototype, "constructor",{
    //     value: Cachorro,
    //     enumerable: false,
    // });

}

Cachorro.prototype = new Animal();
Cachorro.prototype.constructor = Cachorro;

let rex = new Cachorro("Rex","mamifero");
// console.log(rex);

for(let prop in rex){
    if(rex.hasOwnProperty(prop)){
        // console.log(prop);
    }
}

// console.log(rex instanceof Cachorro); // true
// console.log(rex instanceof Animal); // true
// console.log(rex instanceof Object); // true
// console.log(rex instanceof Array); // false

// console.log(Cachorro.prototype.isPrototypeOf(rex)); // true
// console.log(Animal.prototype.isPrototypeOf(rex)); // true
// console.log(Object.prototype.isPrototypeOf(rex)); // true
// console.log(Array.prototype.isPrototypeOf(rex)); // false

// console.log(Object.getPrototypeOf(rex));
// console.log(rex.__proto__);
// console.log(Object.getPrototypeOf(rex) === rex.__proto__); //true










































