const numeros = [1,3,4,1,4,5,3,5,8,9]; // return -> [1,3,4,5,8,9]

let j = 0;
const numerosUnicos = numeros.reduce(function(numUnicos, numAtual, i, _arr){
    console.log("i: " + i + " j: " + j + " numUnicos: " + numUnicos + " numAtual: " + numAtual + " Array: " + _arr + "\n");
    if(numUnicos.indexOf(numAtual) < 0 ){ // não encontrado o numero no array
        
        numUnicos.push(numAtual);
    }
    return numUnicos;
}, []);

console.log(numerosUnicos);