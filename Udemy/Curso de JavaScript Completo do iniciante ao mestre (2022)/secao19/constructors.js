function Cachorro(name){
    this.name = name;
    let posicao = 0;
    console.log(this);

    this.latir = function(){
        console.log(this.name, " esta latindo!");
    };

    this.andar = function(distancia){
        posicao += distancia;
        console.log(this.name, "andou", distancia, "m");
        console.log("A posicação atual é:", posicao, "m");
    }
}

const rex = new Cachorro("Rex");
const toto = new Cachorro("Toto");


console.log(rex);
rex.latir();
rex.andar(5);
rex.andar(10);

console.log(toto);
toto.andar(3);

const laica = new Cachorro("Laica");
laica.andar(2);
laica.andar(-16);

