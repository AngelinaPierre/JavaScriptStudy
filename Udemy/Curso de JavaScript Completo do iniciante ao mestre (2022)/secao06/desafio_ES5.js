function sum(){
    const numbers = [];
    
    // usando o loop for
    // for(let i = 0; i < arguments.length; i++){
    //     numbers.push(arguments[i]);
    // }
    // console.log(numbers);

    // usando o forEach();
    Array.prototype.forEach.call(arguments, function(argument, i){
        console.log("i: " + i + " argument: " + argument + "\n");
        numbers.push(argument);
    })
    // console.log(numbers);

    return numbers.reduce(function(sum,atual){
        return sum + atual;
    }, 0);
}

console.log(sum(1,2,3,4,5));

// sum.call(null, 1,2,3,4,5);
// sum.apply(null, [1,2,3]);


function avarege(){
    const soma = sum.apply(null, arguments);
    return soma / arguments.length;
}

console.log(avarege(1,2,3,4,5));
