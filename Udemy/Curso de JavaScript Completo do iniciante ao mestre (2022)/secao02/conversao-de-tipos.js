let n1 = 10;
let n2 = "2";

// conversão implicita
console.log(typeof n1, typeof n2, n1 * n2); // multiplicação de string com number

console.log(typeof n1, typeof n2, n1 / n2); 

console.log(typeof n1, typeof n2, n1 + n2); // 102, o sinal de + pode ser utilizado tanto para somar quando para concatenar strings.


// CONVERSÃO EXPLICITA.
// sempre que formos fazer calculos matematicos, convertemos para numeros...
// parseInt, parseFloat, Number()

n2 = parseInt(n2);
console.log(typeof n1, typeof n2, n1 + n2);

n1 = "10.99999";
console.log(typeof n1, n1);
n1 = parseInt(n1);
console.log(typeof n1, n1);
n1 = "10.99999";
n1 = parseFloat(n1);
console.log(typeof n1, n1);


// Number()

let n3 = "10aaasad";
n3 = parseInt(n3);

let n4 = 2;

console.log(typeof n3, typeof n4, n3 + n4, n3); // as letras foram descartadas

n3 = "a14";
n3 = parseFloat(n3); // not a number NaN
console.log(typeof n3, n3);



// COnversão de numero em string

let n5 = 10;
n5 = n5 + "";
console.log(typeof n5, n5);
n5 = 15;
console.log(typeof n5, n5);
n5 = n5.toString(); // metodo que converte o numero para string
console.log(typeof n5, n5);

// to string -> Pode receber um paratrmetro (base de conversão), default = 10.

// decimais 0 - 9 | hexadecimal 0 - f(15)
n5 = 12;
n5 = n5.toString(16);
console.log(typeof n5, n5);

// forma binaria
n5 = 15;
n5 = n5.toString(2);
console.log(typeof n5, n5);