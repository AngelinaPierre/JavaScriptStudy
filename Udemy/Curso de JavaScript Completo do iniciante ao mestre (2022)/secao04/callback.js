function teste(n){
    console.log('função teste', n + n);
}

teste(1);

function teste1(cb){
    console.log('função teste 1');
    console.log(cb);
    if(typeof cb === 'function'){
        cb();
    }else{
        throw Error('Precisa ser uma função');
    }
    console.log(cb);

}
// se temos uma função que recebe outra como parametro, temos que passar a função na chamada, ou por função anonima, ou criando uma função e passando seu nome.
teste1(function(){
    console.log('função anonima de callback');
});

function fn(){
    console.log('função declarada para callback');
}
teste1(fn);

// usando function expression

const teste2 = function(cb){
    console.log("função teste 2");
    console.log(cb);
    typeof cb === 'function' && cb(30); // curto circuito.
    console.log(cb);
}

// o que é armazenado dentro da constante [fn] é uma função e não o retorno da mesma. Isso significa que esse codigo não faz exatamente nada.
const fn1 = function(){
    console.log('function expression de callback')
}

// podemos tambem fazer com que nossa callback receba parametros.

const fn2 = function(p){
    console.log('function expression de callback with parameters',p);
}
// fn2(30);

teste2(fn2);

