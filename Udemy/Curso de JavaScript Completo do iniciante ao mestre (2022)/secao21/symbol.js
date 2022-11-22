/*

Vamos agora ver um outro tipo primitivo chamada de [SYMBOL].

Um SYMBOL é um tipo de dado que possui uma chave unica.

1) A primeira coisa que temos que perceber é que o [SYMBOL] não pode ser utilizado com o [OPERADOR NEW] JA QUE [SYMBOL] não é um construtor.

Toda vez que executamos o [SYMBOL] nos é gerado uma [chave unica] para podermos referenciar a esse elemento.

Usamos o [SYMBOL] para evitar que um dev sobrescreva essa propriedade por engano

*/

// [1]
const NOME = Symbol();
console.log(typeof NOME,NOME); 

let n = 0;
// const user = {
//     "teste 1": "1",
//     "teste 2": "2"
// }

const user = {
    // computed property name
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    ["teste" + (++n)]: "teste" + n,
    [NOME]: "com symbol", // lembrando que nome é um symbol e possui um endereço unico na memoria.
    "nome": "com string", 
    3: "com numero", // convertido para string
};
console.log(user);
user.nome = "nome alterado";
console.log(user);
console.log(user[NOME]);

// PARA PODER VER QUE UMA PROPRIEDADE É UM [SYMBOL] USAMO O METODO ABAIXO:

// console.log(Object.getOwnPropertySymbols(user));
let teste = Object.getOwnPropertySymbols(user);
console.log(teste[0]);
console.log(typeof user[teste[0]], user[teste[0]]);

// para alterar o SYMBOL
user[teste[0]] = "alterando valor de symbol";
console.log(user);
