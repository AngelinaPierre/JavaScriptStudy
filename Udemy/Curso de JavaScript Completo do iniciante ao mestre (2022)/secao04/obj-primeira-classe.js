// funções como parametros de outras funções (callback)
function fn(callback){ // callback = função sendo passada como parametro
    // console.log('executar ação de callback');
    // console.log(typeof callback); // string function
    callback(); // execução da função passada como parametro.
}
// na chamada da função vamos passar como parametro uma função anonima.
fn(function(){
    // console.log('função passada por parametro.');
});





// curto circuito (verificação)
function fn(cb){
    // console.log('executar ação de callback com CC');
    // console.log(typeof cb);
    typeof cb === "function" && cb();
}
fn(); // vai executar sem erro e dar undefined
// passndo uma função anonima...
fn(function(){
    // console.log('função passada por parametro 2');
})

function callback(){
    // console.log('função de callback passada por parametro');
}

fn(callback);


// atribuindo funções a propriedades de objetos.
const obj = {
    callback,
}
obj.callback();

// Retornando uma função como resultado de outra função.

function fn2(n1){

    return function(n2){
        return n1 * n2;
    }
}

const funcao2 = fn2(10); // o que estŕa dentro de [funcao2] será a função anonima retornada.
const mult = funcao2(2); // estamos agora passando o segundo parametro requerido, pois a função que erá retornada precisa de um parametro. 

// console.log(mult); // 20

// mais simples
function fn3(){
    fn3.count++;
    return function(){
        console.log('função retornada por paramentro (simples)');
    }
}

fn3(); // não funciona.
console.log(typeof fn3, fn3); // function fn3.
console.log(typeof fn3,fn3()); // function anonymous

fn3.count = 0;
// temos que armazenar a função de retorno em uma variavel
const func3 = fn3();
const func3a = fn3(); 
const func3b = fn3();

func3();
console.log(fn3.count);
console.log(typeof fn3, fn3, typeof func3, func3); // func3 = função anonima.



