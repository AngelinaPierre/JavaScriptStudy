let arr = [1,2,3,4]; 

// console.log(arr.reverse());
// console.log(arr);

let j = 0;
// let soma = arr.reduce(function(acumulador, valor_atual, i, _arr){
//     console.log("i: " + i + " j: " + j + " acumulador: " + acumulador + " valor_atual: " + valor_atual);
//     console.log(_arr);
//     return acumulador + valor_atual;
// }, " -- ");
// console.log(arr);
// console.log(soma);

const nomes = ["Daniel", "Maria", "Joana", "João"];
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual,i,_arr){
    console.log("i: " + i + " j: " + j + " nomes: " + nomes + " nomeAtual: " + nomeAtual);
    let primeiraLetra = nomeAtual[0]; // pegando a primeira letra do nome
    console.log("Letra: "+primeiraLetra);
    if(nomes[primeiraLetra]){
        console.log("Entrando no if");
        nomes[primeiraLetra]++;
    }else{
        console.log("Entrando no else");
        nomes[primeiraLetra] = 1;
    }
    console.log("nomes[primeiraletra] = " + nomes[primeiraLetra] + "\n");
    return nomes
}, {});

console.log(nomesPorOrdem)
