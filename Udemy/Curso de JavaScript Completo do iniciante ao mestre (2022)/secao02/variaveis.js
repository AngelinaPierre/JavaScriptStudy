// espaços onde armazenamos vlaores

// var 

    // cross-browser (ES5)

// let & const (o que iremos utilizar)

    // ES2015

    // let não permite recriar a variavel, o var sim.

let teste = 'minha string';
console.log(teste);
teste = 10;
console.log(teste);

var teste1 = 'var permite recriar a variavel';
var teste1 = 'nova variavel';

const teste2 = 10;
console.log(teste2);
// não conseguimos reatribuir um valor a uma constante.
// com let podemos alterar.

// não precisamos atribuir um valor na criação da variavel.
let teste3;
console.log(teste3);
teste3 = 20;
console.log(teste3);

const teste4 = 'eu sou imutavel';
console.log(teste4);


