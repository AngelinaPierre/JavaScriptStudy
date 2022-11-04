// ES5  

function Animal(){};

Animal.prototype.whoAmI = function(){
    return this;
}

Animal.categoria = "ser vivo";

const dog  = new Animal();


// ES6

class Cachorro { 
    constructor(nome){
        this.nome = nome;
        console.log("chamando metodo estatico de dentro do constructor");
        Cachorro.beber();
    };

    // metodo estatico
    static comer(){
        console.log(this);
        // console.log(`${this.nome} esta comendo!`); // não possui acesso ao nome
        console.log("esta comendo");
        this.beber();
        
    };

    static beber(){
        console.log("esta bebendo");
    }

}

const dog2 = new Cachorro("todinho");