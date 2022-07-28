// array-while
// Criar um array com numeros randomicos não repetidos.

function generateRandomInteger(max){
    return parseInt(Math.random() * max);
}

console.log(typeof generateRandomInteger, generateRandomInteger, generateRandomInteger());


let arr = [];
let i = 0;
// Vantagem do loop, não sabemos quantas vezes o loop será executado.
while(arr.length <= 20){
    // nao sabemos de fato quantas vezes o loop será executado pois o numero randomico não pode ser repetido.
    let randomNumber = generateRandomInteger(30);
    // console.log(randomNumber);

    if(arr.indexOf(randomNumber) < 0){
        arr.push(randomNumber); // garante que a gente não caia no loop infinito
    }else{
        console.log(randomNumber, "ja existe");
    }
    i++;
}
console.log(arr);
console.log(` O Loop foi executado: ${i}x`);

// P0demos usar o metodo [indexOf(numero)] para achar o indice pertencente aquele valor no array.
// > teste = [1,2,3]
// [ 1, 2, 3 ]
// > teste
// [ 1, 2, 3 ]
// > teste.indexOf(2)
// 1
// > teste.indexOf(4)
// -1
// > teste.indexOf("2")
// -1

// Sempre que o indexOf não existir é retornado o valor de -1.
// se no array tiver numeros repetidos, o [indexOf()] irá retornar somente a primeira ocorrencia.
// para saber o ultimo valor repetido, usamos o metodo [lastIndexOf()].

// Como criar numeros randomicos no JS (console)

// Metodo 
// > Math.random()
// 0.8463806451853653
// > Math.random()
// 0.0720545726657631
// > Math.random()
// 0.7362242463036619
// > Math.random()
// 0.3688493182634518
// > Math.random()
// 0.7408840739050411

// Se quisermos um random de 0 a 50
// > Math.random() * 50
// 10.534514137090412
// > Math.random() * 50
// 41.88816809425822
// > Math.random() * 50
// 28.38925065027378
// > Math.random() * 50
// 0.3016485560433435
// > Math.random() * 50
// 0.4146110301427752
// > Math.random() * 50
// 28.784342904240965
// > Math.random() * 50
// 35.64013037394059

// Numeros inteiros 
// >  parseInt(Math.random() * 50)
// 42
// >  parseInt(Math.random() * 50)
// 25
// >  parseInt(Math.random() * 50)
// 25
// >  parseInt(Math.random() * 50)
// 11
// >  parseInt(Math.random() * 50)
// 25
// >  parseInt(Math.random() * 50)


