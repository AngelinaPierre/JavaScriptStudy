(function(){
    let _quantidade = 0;
    let _contador = 0;

    // this.produto disponibiliza o objeto no escopo global.
    this.produto = {
        get quantidade(){
            console.log(`Quantidade foi consultada: ${++_contador} vez${_contador > 1 ? 'es': ''}`);
            return _quantidade;
        },
        set quantidade(value){
            if(value > 0){
                _quantidade = value;
            }
        }
    }

})()

produto.quantidade = 20;
console.log(produto.quantidade);
produto.quantidade = 21;
console.log(produto.quantidade);
produto.quantidade = 22 ;
console.log(produto.quantidade);