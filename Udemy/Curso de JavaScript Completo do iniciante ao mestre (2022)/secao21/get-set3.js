(function(){

    let usuarios = [];
    this.pessoa = {
        get usuario(){
            // retorna o ultimo indice do array de usuarios.
            if(usuarios.length > 0){
                return usuarios[usuarios.length - 1]; // não usamos o metodo pop() pois ele é destrutivo.
            }
        },
        set usuario(_usuario){
            if(usuarios.indexOf(_usuario) < 0){
                // usuarios não existe, logo colocamos no array
                usuarios.push(_usuario);
            }
        },
        get usuarios(){
            return [].concat(usuarios);
        },
    }
})()

