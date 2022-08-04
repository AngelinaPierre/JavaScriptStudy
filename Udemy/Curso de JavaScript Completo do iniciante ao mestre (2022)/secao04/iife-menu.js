// function init() {
//     let isValid = false;
//     console.log('menu'); 
// }
// init()

(function(){
    let isValid = false;
    console.log('menu + isValid:', isValid); 

    function init() {
        console.log('init do menu');
        console.log('init do menu + isValid: ', isValid);
    }
    init();
})();

// função anonima com parametros

(function(n1,n2,n3){
    let isValid = true;
    console.log('param: ', isValid, n1,n2,n3);

    function init(){
        console.log('init do menu');
    }
    init();
})(10,25,38);


// acessando objetos globais

(function(win,doc){
    let isValid = false;
    win.alert("objetos globais");
    console.log('obg glob: ', isValid, win,doc);

    function init(){
        console.log('init ob global');
    }
    init();
})(window, document);


// use-strict
console.log('use-stric');
(function(win,doc){
    "use strict";
    isValid = false;
    win.alert("objetos globais");
    console.log('obg glob: ', isValid, win,doc);

    function init(){
        console.log('init ob global');
    }
    init();
})(window, document);

console.log("isValid", isValid);