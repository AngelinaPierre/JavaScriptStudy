function sum(){
    // console.log(typeof arguments, arguments); // objeto = [Arguments] { '0': 1, '1': 2 }
    // console.log(...arguments); // imprime cada objeto individualmente = 1 2
    const numbers = [...arguments]; 
    // console.log(typeof numbers, numbers); // object = [1,2]
    return numbers.reduce(function(sum, valorAtual){
        return sum + valorAtual;
    },0)
}

function avarege(){
    // console.log(typeof sum(...arguments), sum(...arguments)); // 3
    return sum(...arguments) / arguments.length;
}

// console.log(avarege(1,2));