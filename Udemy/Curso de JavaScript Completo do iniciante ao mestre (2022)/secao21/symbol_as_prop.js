// class Contador {
//     // contador = 0; // essa sintaxe não funciona no node, somente no browser
//     constructor(){
//         this.contador = 0;
//     }
//     increment(){
//         this.contador++;
//         console.log(this.contador);
//     }
// }

// let c1 = new Contador();
// c1.contador = 100; // alterando propriedade diretamente.
// c1.increment();
// c1.increment();
// c1.increment();
// console.log(c1.contador);
// console.log(c1);

// CRIANDO PROPRIEDADE COM SYMBOL PARA QUE NÃO SE POSSA ALTERAR COM FACILIDADE

class Contador {
    constructor(){
        this._symbol = Symbol();
        this.contador = 0;
        this[this._symbol] = 0; // referencia que armazena o symbol
    }
    increment(){
        this.contador++;
        this[this._symbol] = this[this._symbol] + 1;
        console.log(this.contador);
        console.log(this[this._symbol]);
    }
}

let c1 = new Contador();
c1.contador = 100;
c1[c1._symbol] = 200; // misturando conceito de classe e função autoinvocavel podemos esconder ainda mais o nosso symbol.
c1.increment();
c1.increment();
c1.increment();
console.log(c1.contador);
console.log(c1);


/*
Propriedades não funcionam no node? Será?


Olá pessoal, tudo bem?


No vídeo anterior eu falei que a propriedade contador não funcionava no node. Porém como muito bem observado por Andreas Ziegler, o código com a propriedade contador = 0 funcionou perfeitamente mesmo antes de converter para symbol.

Pode ter ocorrido alguma atualização do nodejs que corrigiu esse bug, porém, a utilização de symbols ainda pode ser interessante uma vez que nos permite criar propriedades "escondidas" em nossos objetos.
*/