// soma (+) | subtração (-) | multiplicação (*) | divisão (/) | resto (%) | potencia (**).

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2); // multiplos de 3 ou par ou impar
console.log(3 ** 2);


// OPERADORES DE ATRIBUIÇÃO

let n3 = 20; 
// n3 = n3 + 15;
n3 += 15; 
// -= | *= | /= | %= | **=
console.log(n3);


// OPERADORES DE INCREMENTO E DECREMENTO

let i = 0;
// i = i + 1; || i+= 1
console.log(i++);
console.log(i);
console.log(++i);
console.log(i); 

// OPERADORES DE COMPARAÇÃO

/**
 * IGUAL DE VALOR ==
 * IGUAL DE VALOR E TIPO ===
 * <,>,<=,>=
 * != VALORES DIFERENTES
 * !== VALORES E TIPOS DIFERETENS
 */


// OPERADORES LÓGICOS

/**
 * && - AND
 * || - OR
 * !  - NOT
 * 
 * Para uma pessoa viajar para o exterior:
 *  - precisa ser maior de 18 anos
 *              OU
 *  - Acompanhado com os pais
 *              E
 *  - Ter comprado bilhete
 * 
 */

let idade = 18;
let paisPresentes = true;
let comprouBilhete = false; //[2]
// const podeViajar = idade >= 18 || paisPresentes === true; // [1]
// const podeViajar = idade >=18 || paisPresentes;
// const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete); //[2] - Forma errada
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; //[2] - Forma certa
console.log(`Pode viajar : ${podeViajar}`);

/**
 * [1] - Como a variavel paisPresentes é um booleano (true) podemos somente escrever o nome da variavael sem os operadores de atribuição.
 * [2] - Precisamos colocar os parenteses na forma certa pois se não teremos um quebra na regra de negocio, onde a pessoa pode viajar apesar de não ter comprado o bilhete.
 */


// PRECENDENCIA DE OPERADORES

console.log(n1,n2,n3);
n1 = 6;
n2 = 8;
let media = (n1 + n2)/2;
console.log(`media: ${media}`);

console.log( 3* 2 ** 2); // 12
console.log((3*2)**2); //36


// if.. else





