

// PRECENDENCIA DE OPERADORES

let n1 = 6;
let n2 = 8;
console.log(n1,n2);
let media = (n1 + n2)/2;
console.log(`media: ${media}`);

console.log( 3* 2 ** 2); // 12
console.log((3*2)**2); //36

if(n1 === 0 || n2 === 0){
    console.log('Reprovado!');
}else if(media < 7){
    console.log('Reprovado! Vai para recuperação!');
}else{
    console.log('Aprovado');
}
console.log('saiu do bloco if!');

// if.. else


let idade = 27;
let paisPresentes = false;
let comprouBilhete = true; //[2]
// const podeViajar = idade >= 18 || paisPresentes === true; // [1]
// const podeViajar = idade >=18 || paisPresentes;
// const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete); //[2] - Forma errada
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; //[2] - Forma certa
console.log(`Pode viajar : ${podeViajar}`);

/**
 * [1] - Como a variavel paisPresentes é um booleano (true) podemos somente escrever o nome da variavael sem os operadores de atribuição.
 * [2] - Precisamos colocar os parenteses na forma certa pois se não teremos um quebra na regra de negocio, onde a pessoa pode viajar apesar de não ter comprado o bilhete.
 */


if(comprouBilhete === true){
    console.log('1Sim. Comprou o bilhete.');
}else{
    console.log('1Não comprou o bilhete!');
}

if(comprouBilhete){
    console.log('2Sim. Comprou o bilhete.');
}else{
    console.log('2Não comprou o bilhete!');
}

if(!comprouBilhete){
    console.log('3Sim. Comprou o bilhete.');
}else{
    console.log('3Não comprou o bilhete!');
}

if(!comprouBilhete){
    console.log('3Sim. Comprou o bilhete.');
}else{
    if(idade >=18){
        console.log('4É maior de idade, pode viajar!');
    }else{
        console.log('5OPA, menor de idade, não pode viajar!');
    }
}

// OPERADOR TERNARIO

// let msgMaiorIdade = "";
// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade";
// }else{
//     msgMaiorIdade = "É menor de 18 anos"
// }

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos";

if(!comprouBilhete){
    console.log('Não comprou o bilhete');
}else{
    console.log(msgMaiorIdade);
}




