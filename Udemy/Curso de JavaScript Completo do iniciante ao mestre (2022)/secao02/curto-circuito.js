// usar operadores para executar expressões de forma mais elegantes
// usado para definir valores default...


let n = 0;

if(n === 0){
    n = 10;
}
console.log(n); 

// Zerio é um valor considerado como falso quando transformado em booleano, logo poderiamos fazer o seguinte:

if(!n){ // !n = true
    n = 10;
}
console.log(n);

// usando curto-circuito
// n = 1; // se trocarmos o valor de n p/ 1, o valor será 1...
n = n || 10; // o operador faz a avaliação.
console.log(n);

// formas de utilização

let isValid = false;

if(!isValid){
    console.log("é valido!");
}

isValid = true;
isValid && console.log("é valido.");

isValid = false;
isValid || console.log("não É VALIDO."); // funciona como elsec


// não precisa ser exatamente um booleano.

// 0 && "ola" = 0
// 0 || "ola" = 'ola'
// "ola" || "mundo" = 'ola'
// "ola" && "mundo" = 'mundo'
// n = true || "ola" = true
// NaN && "ola mundo" = NaN
// NaN || "ola mundo" = "ola mundo"
 



