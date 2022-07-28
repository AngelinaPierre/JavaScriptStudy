/**
 * ARRAYS = Conjuntos de dados (listas, vetor)
 *  - Espaço na memória onde iremos armazenar um conjunto de dados.
 * 
 * Temos duas maneiras de criar arrays em javascript
 * 
 * [SINTAXE FORMAL]
 *      1) Criamos uma variavel constante que recebe um novo objeto do tipo Array().
 *          const arr = new Array();
 * 
 * 
 * [SINTAXE LITERAL]
 * 
 * 
 */


const arr = new Array();
console.log(arr); 
console.log(typeof arr); 

// array dentro de arrays
const arr2 = new Array(true, "Daniel", 28, new Array(2,4,10));
console.log(arr2);

// colocando valores
arr[0] = "Angelina";
arr[1] = 40;

console.log(arr);
console.log(arr2);
console.log(arr2[3]);
console.log(arr2[3][2]);


// Quantidade de elementos no array usa a propriedade [.length]
console.log(arr2[3].length); 
console.log(arr2[3][arr2[3].length - 1]); // 10 


// sintaxe literal (mais utilizada)

const arr3 = ["Pierre", 40, [3,6,9], true];
const arr4 = [];

arr4[0] = [1,2];

console.log(arr3);
console.log(arr3[0]);
console.log(arr4);

// adicionando items ao array

arr3[4] = "novo valor";
console.log(arr3);
arr3[arr3.length] = "novo valor 2";
console.log(arr3);


// metodo push
arr3.push("Adicionado com push()");
console.log(arr3);

arr3.push("a","b","c");
console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][0]);
let n = 6;

// console.log(arr3[6]);
console.log(arr3[n]); // usamos as variaveis para acessar os valores.


