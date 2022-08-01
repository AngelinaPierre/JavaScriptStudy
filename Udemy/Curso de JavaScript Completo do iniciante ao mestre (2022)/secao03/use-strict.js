// "use strict";
// use strict deixa o codigo mais segura.
// x = 10;

function foo(){
    x = 30;
}
foo();
console.log(x);

// outra coisa que tinha no javascript eram parametros de mesmo nome, o [use-strict] não permite mais

// function dobrar(n1, n1){
//     "use strict";
//     console.log(n1, n1);
//     return n1 * n1;
// }
// console.log(dobrar(5,7));

// Aqui estamos levando uma variavel que não precisa ser global para o escopo global, poluindo assim o escopo.
// Quando colocamos o use-strict dentro da função, o [this] irá virar undefined e não podemos atribuir uma propriedade dentro do undefined.
// OU seja, não estaremos adicionando uma propriedade, no caso, [a] ao objeto [window].

function Teste(){
    "use strict"; // 
    console.log(this);
    this.a = "a";
    console.log(this.a);
}
Teste();
// console.log(Teste());