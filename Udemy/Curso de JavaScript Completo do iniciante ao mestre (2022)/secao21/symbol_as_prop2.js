// Vamos fazer com que dentro da constante [contador] serja armazenado o retorno da nossa função.

const contador = (function(){

    let _symbol = Symbol();

    // return "uma string qualquer";
    return class Contador {
        constructor(nome){
            this.nome = nome;
            this[_symbol] = 0;
        };
        increment(){
            this[_symbol]++;
            console.log(this.nome,this[_symbol]);
        };

        get contador(){
            return this[_symbol];;
        }
    }
})();

console.log(contador);

const c1 = new contador("c1");
c1.increment(); // c1 1
c1.increment(); // c1 2
c1.increment(); // c1 3
c1.increment(); // c1 4

const c2 = new contador("c2");
c2.increment();

console.log(c1.contador); // 4
console.log(c2.contador); // 1
console.log(c1); //  não temos "exportada" uma propriedade que armazene esse symbol!
console.log(Object.getOwnPropertySymbols(c1)); // temos acesso ao symbol porem nao sabemos o nome dele.

// Lembre-se que [symbol] não tem haver com privacidade, e sim com a não facilidade de sobrescrever o valor.
