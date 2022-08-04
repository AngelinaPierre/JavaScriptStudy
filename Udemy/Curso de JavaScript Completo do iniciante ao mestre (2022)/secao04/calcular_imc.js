function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        // checagem para ver se estão passando os parametros
        throw Error('need two parameters: weight and height'); 
    }
    return peso / (altura * altura);
}

// função para receber o calculo do IMC e retornar uma string
function classificaIMC(imc){
    if(imc <= 16.9){
        return ' muito abaixo do peso';
    }else if(imc <= 18.4){
        return 'abaixo do peso';
    }else if(imc <= 24.9){
        return 'normal';
    }else if(imc <= 29.9){
        return 'acima do peso';
    }else if( imc <= 34.9){
        return 'obesidade 1';
    }else if(imc <= 40){
        return 'obesidade 2';
    }else{
        return 'obesidade 3';
    }
}


let imc = calcularIMC(50, 1.63);
console.log(imc); 
console.log(classificaIMC(imc));