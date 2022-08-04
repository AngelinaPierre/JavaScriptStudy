// criar função autoinvocavel
(function(){
    function calcularMedia(){
        let totalMedia = 0;
        let qtdParams = arguments.length;
        for(let i = 0; i < qtdParams; i ++){
            if(typeof arguments[i] !== "number"){
                throw Error("only Numbers");
            }
            totalMedia += arguments[i];
        }
        return (totalMedia / qtdParams) || 0; // para nao retornar NAN (curto circuito);
    }

    let media = calcularMedia(2,1,2,3); 
    console.log(media);
})()