/**
 * [1] - Todas as variaveis que declaramos dentro de uma função, so estão disponiveis dentro desta função.
 * 
 * [var] - escopo da função
 * [let e const] - escopo do bloco.
 * 
 * 
 */

let n = "escopo global"; // escopo global

function mostraN(){
    // n = "local"; // estamos atribuindo um valor a variavel global 
    let n1 = "n1 local"; // Quando utilizamos a palavra (let) dentro da função, esta variavel so existe no escopo desta função.
    console.log("valor de n1 : " + n1);

    if(true){
        let n1 = "dentro de if com let";
        var n2 = "n2 dentro de if com let";
        console.log("valor de n1 dentro de if com let : " + n1);
        console.log("valor de n2 dentro de if com let : " + n2);
        
    }
    console.log("valor de n2 fora do if com let : " + n2);
}

mostraN();
console.log("valor de n no escopo global: " + n);

/**
 * FUNÇÕES ANINHADAS
 * 
 * [1] - Se tirarmos a palavra let da função interna, nao estamos mais criando uma nova variavel dentro da função mas sim alterando a variavel (n) da função externa.
 * 
 */

function fnExt(){
    let n = "n local na função fnExterna";

    function fnInterna(){ [1]
        let n = "n local na função interna";
        console.log("n função interna: " + n);
    }
    fnInterna(); // chamando função interna
    console.log("n função externa: " + n);
}

fnExt();
