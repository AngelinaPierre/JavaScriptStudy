function calcIMC(peso, altura, callback){
    let imc = peso / (altura * altura);
    if( peso === undefined || altura === undefined){
        // checagem de erro
        throw Error('Need two parameters: weight and height');
    }
    if(typeof callback === 'function'){
        return callback(imc);
    }
    return imc;
}

// função que recebe o IMC e fala sua categoria
function classIMC(imc){ // usada como função de callback
    if(imc <= 16.9){
        return 'muito abaixo do peso';
    }else if(imc <= 18.4){
        return 'abaixo do peso';
    }else if(imc <= 24.9){
        return 'normal';
    }else if(imc <= 29.9){
        return 'acima do peso';
    }else if(imc <= 34.9){
        return 'obesidade 1';
    }else if(imc <= 40){
        return 'obesidade 2';
    }else{
        return 'obesidade 3';
    }
}

let imc = calcIMC(50, 1.63);
let imc2 = calcIMC(60, 1.65, classIMC); // aqui não estamos executando uma função e sim passando uma referencia para ela.
// ou seja, calcIMC agora pode receber 3 parametros, dois obrigatorios e o terceiro opcional.
console.log(typeof imc, imc);
console.log(typeof imc2, imc2);
