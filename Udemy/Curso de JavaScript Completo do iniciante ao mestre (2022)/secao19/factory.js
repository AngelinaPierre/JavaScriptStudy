function criarCachorro(name){
    let posicao = 0;
    return {
        name,
        latir(){
            console.log(this.name, " esta latindo!");
        },
        andar(distancia){
            posicao += distancia;
            console.log(this.name, " andou ", distancia, " m");
        },
        get posicao(){
            console.log(`A posicao atual de ${this.name} é: ${posicao}`); // this.posicao = undefined

            return posicao;
        }
    }
}

const rex = criarCachorro("Rex");
// rex.andar(10);
// rex.andar(5);
// rex.posicao;
// console.log(rex.posicao);
console.log(rex);
const toto = criarCachorro("Toto");
// toto.andar(20);
// toto.andar(-3);
// toto.posicao;
console.log(toto);