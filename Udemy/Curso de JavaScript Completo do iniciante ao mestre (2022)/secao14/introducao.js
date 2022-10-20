// objeto Math

// min() / max()
console.log(Math.min(1,2,3,4,5)); // minimo valor
console.log(Math.max(1,2,10,4,5)); // maximo valor

let arr = [1,2,10,4,5];
console.log(typeof Math.max(...arr), Math.max(...arr)); // spread operator para separar em parametros individuais

// round()
console.log(Math.round(45.5)); // arredondar p cima = 46
console.log(Math.round(45.5000000000001)); // arredondar p cima = 46
console.log(Math.round(45.49)); // arredondarp baixo = 45
console.log(Math.round(45.499999999999999)); // arredondarp baixo = 45

// floor() -> arredonda para baixo
console.log(Math.floor(49.9999999)); // 49
// ceil() -> arredonda para cima
console.log(Math.ceil(49.0000001)); // 50

// pow() -> potencia
console.log(Math.pow(2,3)); // 8
// outra maneira de potencia
console.log(2**3); // usando 2 asteriscos

// sqrt() -> raiz quadrada
console.log(Math.sqrt(49)); // 7

// cbrt() ->  raiz cubica
console.log(Math.cbrt(8));

// random() - > numero aleatorio de 0 a quase 1

for(let i = 0; i < 10; i++){
    console.log("---------[0 a 1]------");
    console.log(Math.random());// variando de 0 a quase 1
    console.log(Math.floor(Math.random()));// variando de 0 a quase 1
    console.log("------[0 a 2]---------");
    console.log(Math.random() * 2);// variando de 0 a quase 2
    console.log(Math.floor(Math.random() * 2));
    console.log("-------[0 a 10]--------");
    console.log(Math.random() * 10); // variando de 0 a quase 10
    console.log(Math.floor(Math.random() * 10));
}

