'use strict';

const pessoa = {
    nome: "Angelina",
}

// console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"));
Object.defineProperty(pessoa, "sobrenome", {
    value: "Tapias Morales",
    enumerable: true,
    configurable: true,
    writable: true,
})
// console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"));
// pessoa.sobrenome = "lalalal";
// console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"));
Object.defineProperty(pessoa, "sobrenome", {
    configurable: false,
});
Object.defineProperty(pessoa, "sobrenome", {
    writable: false,
})
Object.defineProperties(pessoa, {
    prop1: {
        value: "prop 1",
        writable: true,
    },
    prop2: {
        writable: false,
        value: 10,
    }
});
console.log(pessoa);
console.log(Object.getOwnPropertyDescriptor(pessoa, "sobrenome"));
console.log(Object.getOwnPropertyDescriptor(pessoa, "prop1"));
console.log(Object.getOwnPropertyDescriptor(pessoa, "prop2"));
// delete pessoa.sobrenome;
// for( let prop in pessoa){
//     console.log(prop); // so mostra a propriedade nome
// }
