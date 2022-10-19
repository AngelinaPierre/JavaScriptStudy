let numero = 1234567.890;

// toFixed()
console.log(numero.toFixed(5));
console.log(typeof numero.toFixed(5));

// toPrecision()
console.log(numero.toPrecision(15));
console.log(typeof numero.toPrecision(15));


console.log(123 .toPrecision(6));
console.log((123).toPrecision(6));


// toExponential()
numero = 12.34567;

console.log(numero.toExponential());
console.log(numero.toExponential(4));

// toString()
numero = 15;

console.log(numero.toString());
console.log(typeof numero.toString());
console.log(numero.toString(2));

// usando toString para ver os valores binarios dos numeros 
console.log(0 .toString(2));
console.log(1 .toString(2));
console.log(2 .toString(2));
console.log(3 .toString(2));
console.log(4 .toString(2));
console.log(5 .toString(2));
console.log(6 .toString(2));
console.log(7 .toString(2));
console.log(8 .toString(2));


// representação hexadecimal

console.log((15).toString(16));
console.log((16).toString(16));


// toLocaleString()
numero = 123456.789; 

// numero convertido para string, formato universal (human redeable)
console.log(typeof numero.toLocaleString(), numero.toLocaleString());
// numero na visualização do brasil, a string que passamos como parametro refere-se a localização;
console.log(typeof numero.toLocaleString("pt-BR"), numero.toLocaleString("pt-BR"));
// representação em forma de moeda, basta passar como segundo parametro um objeto de configuração
// juntamente com o tipo da moeda.
console.log(typeof numero.toLocaleString("pt-BR",{style: "currency",currency:"BRL"}),numero.toLocaleString("pt-BR",{style: "currency",currency:"BRL"}));

// formato americano
console.log(typeof numero.toLocaleString("en-US",{style: "currency", currency: "USD"}),numero.toLocaleString("en-US",{style: "currency", currency: "USD"}));

// formato portugal
console.log(typeof numero.toLocaleString("pt-PT",{style: "currency", currency:"EUR"}),numero.toLocaleString("pt-PT",{style: "currency", currency:"EUR"}));

// https://pt.iban.com/currency-codes

// MAX_VALUE / MIN_ VALUE
console.log(typeof Number.MAX_VALUE,Number.MAX_VALUE);
console.log(typeof Number.MIN_VALUE, Number.MIN_VALUE);

// isNaN <> isFinity

console.log(typeof parseInt("30"), parseInt("30")); // number 30
console.log(typeof parseInt("sads"),parseInt("sads")); // number NaN

// let numeroAsString = "3.456";
// let numeroAsString = "3.456a";
let numeroAsString = "a3.456";
console.log(typeof numeroAsString, numeroAsString, parseFloat(numeroAsString));
console.log(typeof isNaN(numeroAsString), isNaN(numeroAsString)); // como o numero pode ser convertido, temos o retorno como falso

