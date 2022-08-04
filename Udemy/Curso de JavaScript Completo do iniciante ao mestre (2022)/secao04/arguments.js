// function somar(n1, n2) {
//     return n1 + n2;
// }
// console.log(somar(1, 2));
// console.log(somar(1, 2, 4)); // 3

// // para termos acesso a um terceiro parametro, precisarios add mais um na função

// function somar3(n1, n2, n3) {
//     return n1 + n2 + n3;
// }

// console.log(somar3(1, 2)); // NaN
// console.log(somar3(1, 2, 4)); // 7

// // com arrays...
// function somar4(arr) {
//     let somaTotal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         somaTotal += arr[i];
//     }
//     return somaTotal;
// }

// console.log(somar4([1, 2, 3]));

// // somente com numeros

// function somar5() {
//     console.log(arguments);
//     let somaTotal = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         somaTotal += arguments[i];
//     }
//     console.log(typeof arguments, arguments);
//     return somaTotal
// }

// console.log(somar5(1, 3, 5));
// console.log(somar5(1, 3, 5, 2, 3, 4));
// console.log(somar5(1, 3, 5, 231, 32, 31, 3, 231));

// função somar como const expression (arguments)
const somar1 = function () { // função "sem nome" atribuida a uma variavel com nome
    console.log(arguments);
    let somaTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        somaTotal += arguments[i];
    }
    return somaTotal;
}

console.log(somar1(1,2,3,4));
console.log(somar1.name);

// Se for uma arrow function irá dar erro.
// const somar2  = () => {
//     console.log(arguments);
//     somaTotal = 0; 
//     for(let i = 0; i < arguments.length; i ++){
//         somaTotal += arguments[i];
//     }
//     return somaTotal;
// }
// console.log(somar2(1,2,3,4,5));

const somar6 = function s() { // função com nome atribuida a uma variavel com nome.
    console.log(arguments);
    let somaTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        somaTotal += arguments[i];
    }
    return somaTotal;
}

console.log(somar6(1,2,3,4,3,1));
console.log(somar6.name);


// somar como arrow function
const somar7 = () => { // função com nome atribuida a uma variavel com nome.
    // console.log(arguments); // arrow function nao usa arguments.
    return
    let somaTotal = 0;
    for (let i = 0; i < arguments.length; i++) {
        somaTotal += arguments[i];
    }
    return somaTotal;
}

console.log(somar7.name);

// function expression
function somar8(){
    console.log(arguments);
    let somaTotal = 0; 
    for(let i = 0; i < arguments.length; i++){
        somaTotal += arguments[i];
    }
    return somaTotal;
}
console.log(somar8.name);