// tipos primitivos 

// strings, number (int, float), boolean
// undefined, null, symbol(ES2015)

let minhaVar = 'string';
console.log(minhaVar);
let minhaVar1 = "Minha 'string'";
console.log(minhaVar1);
let minhaVar2 = "Minha com aspas duaplas \"string\"";
console.log(minhaVar2);
// template literal
var minhaVar3 = 'minha template literal';
console.log(minhaVar3);
let idade = 40;
let msg1 = "eu possuo" + idade + " anos";
console.log(msg1);
console.log("Hello" + " world");
let msg2 = `eu possuo ${idade} anos`;
console.log(msg2);

let var1 = 10;

let var2 = 10.5;


// para verificar o tipo de uma variavel usamos o typeof

console.log(typeof msg1, typeof idade, typeof minhaVar, " -- ", 20);

// number
const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);


// boolean

const isValid = true; // false
console.log(`isValid: ${isValid}`);



// undefined e null

let varTeste;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);

// precisamos explicitamente declarrar o valor null
let varTeste1 = null; // uma variavel que tenha o valor null, possui como tipo um object.
console.log(varTeste1);
console.log(typeof varTeste1);
varTeste = 10;
console.log(typeof varTeste1, varTeste1);








































