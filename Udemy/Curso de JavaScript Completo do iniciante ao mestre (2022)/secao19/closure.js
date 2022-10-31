// const teste = (function(){
//     let num = 0;
//     return function testeInterno(){
//         console.log("testeInterno chamado ", ++num);
//         return "retorno de testeInterno " + num;
//     }
// })();

// outra maneira de usar o conceito de closure
const teste = (function(num){
    // num = 10;
    return function testeInterno(){
        console.log("testeInterno chamado ", ++num);
        return "retorno de testeInterno " + num;
    }
})(10);

console.log(teste);
console.log(teste());
teste();
teste();
let str = teste();
console.log(str);
let str2 = teste();
console.log(str2);