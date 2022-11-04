if(!String.prototype.replaceAll1){
    String.prototype.replaceAll1 = function(buscaStr, trocaStr){
        console.log(this);
        console.log(this.valueOf);

        if(!(buscaStr instanceof String || typeof buscaStr === "string")){
            throw Error("first parameter must be a string");
            // throw new Error("first parameter must be a string"); // igual acima
        };

        if(!(trocaStr instanceof String || typeof trocaStr === "string")){
            throw Error("second parameter must be a string");
            // throw new Error("first parameter must be a string"); // igual acima

        }


        return this.valueOf().split(buscaStr).join(trocaStr);
    }
}else{
    console.log("Metodo existe.");
}


let str = "Testando o repllaceAll1()";
let str1 = "a";
let str2 = "b";

console.log(str);
console.log(str1);
console.log(str.replaceAll1(str1,str2));
console.log(str2)
console.log(str.replaceAll1(str2,str1));


