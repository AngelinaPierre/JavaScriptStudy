/**
 * - Vamos criar dois arrays (nomes e idades) para vermos o porque de usar objetos
 * - Quando temos que trabalhar com um grupo de informações conectadas, temos que utilizar objetos.
 */

// [1]
// const nomes = ["Angelina", "Maria", "Bruno"];
const idades = [40, 28, 35];
// console.log(nomes[0],idades[0]);

// sintaxe formal do objeto.

// const arr = new Array(); // []
// console.log(typeof arr, arr);
const pessoa = new Object(); // {}
// console.log(typeof pessoa, pessoa);

// Colocando propriedades e valores

pessoa.nome = "Pierre";
pessoa.idade = 40;
console.log(typeof pessoa, pessoa);

// acessando somente uma propriedades
console.log(typeof pessoa.nome, pessoa.nome);
console.log(typeof pessoa.idade, pessoa.idade);

// quando não temos dentro do objeto a propriedade chamada, recebemos um undefined.
let prop = "nome";
console.log(typeof pessoa.prop, pessoa.prop);

// para usarmos o valor da propriedades poderiamos:
// usar sintaxe de colchetes
console.log(typeof pessoa["nome"],pessoa["nome"]);
// ou 
console.log(typeof pessoa[prop],pessoa[prop]);

// quando temos a propriedade dentro do objeto podemos utilizar duas sintaxes
// a sintaxe de ponto
console.log(pessoa.idade);
// quanto a sintaxe de colchetes
console.log(pessoa["idade"]); // não pode esquecer as aspas...
// console.log(pessoa[idade]); // idade nesse contexto vira uma variavel a ser buscada.



// sintaxe literal

const pessoa2 = {
    nome: "Vitoria",
    idade: "40",
}

console.log(typeof pessoa2, pessoa2);
console.log(typeof pessoa2.nome, pessoa2.nome);
console.log(pessoa2["idade"]);






































