// ESCOPO GLOBAL

// podemos proteger essa variavel criando um objeto ou um array que tenha os valores permitidos.
let tipo = ""; 
// Criamos esse objeto para que a gente nao tenha que fazer varios 'ifs'. Poderia ser feito com array
// const tiposPermitidos = {
//     "mamifero": true,
//     "anfibio": true,
//     "reptil": true,
// }; 

const tiposPermitidos = ['mamifero', 'anfibio'];

// objeto literal
const cachorro = {
    name: "Rex",
    // encarado com propriedade, porem dentro do objeto é uma função
    get tipo(){
        return tipo;
    },
    set tipo(_tipo){

        // padrão objeto

        // if(tiposPermitidos[_tipo]) tipo = _tipo;

        // if(tiposPermitidos[_tipo]){
        //     tipo = _tipo;
        // }else{
        //     throw new Error("Tipo não permitido");
        // }

        // padrao array
        if(tiposPermitidos.indexOf(_tipo) >= 0){
            tipo = _tipo;
        }
    }
};

// ESCOPO FUNÇÃO ANONIMA

 
// IIFE PARA EVETIR SUJAR ESCOPO GLOBAL
(function(){

    let tipo = ""; 
    const tiposPermitidos = ['mamifero', 'anfibio'];

    const gato = {
        name: "migal",
        get tipo(){
            return tipo;
        },
        set tipo(_tipo){
            if(tiposPermitidos.indexOf(_tipo) >= 0){
                tipo = _tipo;
            };
        },
    }

    // window.gato = gato; // não funciona no node!
    this.gato = gato;
    
})()