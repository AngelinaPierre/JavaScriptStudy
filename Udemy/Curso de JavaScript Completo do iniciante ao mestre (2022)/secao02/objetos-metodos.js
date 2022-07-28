// Metodos são funções atrelados a objetos que criamos e ja vimos.

const produto = {
    nome: "caneta",
    qtd: 10,
    
    // metodo modo antigo
    comprar: function(numero){
        console.log(this);
        if(numero > this.qtd){
            // nesse contexto o [this] está fazendo uma referencia ao produto, ao objeto em questao.
            return "Quantidade não disponivel!";
        }
        this.qtd -= numero;
    },

    // metodo modo mais novo JS
    comprar1(numero1){
        console.log(this);
        if(numero1 > this.qtd){
            // nesse contexto o [this] está fazendo uma referencia ao produto, ao objeto em questao.
            return "Quantidade não disponivel!";
        }
        this.qtd -= numero1;
    },

    // arrow functions
    teste1: function (){
        console.log("teste 1");
        console.log(this);
    },
    teste2: () => { // dentro da arrow function a palavra [this] tem um comportamento diferente.
        console.log("teste 2");
        console.log(this);
    },
}


// produto.comprar1(3);
// console.log(produto);  

// produto.comprar1(13);
// console.log(produto);

// console.log(produto.teste1());
// console.log();
// console.log(produto.teste2());

produto.teste1(); // equivale a propria quantidade dentro do objeto produto
console.log();
produto.teste2(); // [this] vira um objeto vazio ao ser utilizado na ARROW function.























