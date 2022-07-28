// arquivo sum.js na aula

function sum(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw Error("sum aceita apenas numeros");
    }
    return n1 + n2;
}

// tratamento de erro.

// let soma = "";
// try {
//     soma = sum(3, "a");
// } catch (err) {
//     console.log("Erro");
//     console.log(err.message);

// }

// console.log(soma);
