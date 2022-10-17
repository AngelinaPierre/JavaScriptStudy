let str1 = "Minha String Bacanuda";

// metodo replace() + expressão regular = replaceAll()
// console.log(str1.replace(/i/g, "o"));
// console.log(str1);

// metodo indexOf()
// console.log(str1.indexOf("string"));
// console.log(str1.indexOf("i"));

// metodo lastIndexOf()

// console.log(str1.lastIndexOf("i"));

// procurando uma string/caractere que não existe
// console.log(str1.lastIndexOf("xasda"));


// metodo includes()

// console.log(str1.indexOf("asdas"))
// console.log(str1.includes("asdas"))
// console.log(str1.indexOf("asdas"))
// console.log(str1.indexOf("asdas") >= 0);


// metodo slice() e substring()
// console.log(str1);
// console.log(str1.slice(2,5));
// console.log(str1.substring(2,5));
// console.log(str1.slice(2));
// console.log(str1.substring(2));
// console.log(str1.slice(-5,-1));
// console.log(str1.substring(-2,-1));
// console.log(str1.slice(8,1));
// console.log(str1.substring(8,1));


// metodo toUpserCase() e toLowerCase()

// console.log(str1);
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// metodo valueOf()

// let strAsObj = new String("minha string como objeto");
// console.log(strAsObj);
// console.log(strAsObj.valueOf());
// console.log(strAsObj.toString());


// metodo trim()

// str1 = "    " + str1 + "    ";
// console.log(str1);
// console.log("----------------------");
// console.log(str1.trim());
// console.log("----------------------");
// console.log(str1.trimEnd());
// console.log("----------------------");
// console.log(str1.trimStart);
// console.log("----------------------");
// console.log(str1);
// console.log("----------------------");


// str1 = `
//     teste
//     pula linha

//     fim da linha


            
// `

// console.log(str1);
// console.log("----------------------");
// console.log(str1.trim());
// console.log("----------------------");
// console.log(str1.trimEnd());
// console.log("----------------------");
// console.log(str1.trimStart);
// console.log("----------------------");
// console.log(str1);

// metedo padStart() e padEnd()

// str1 = "0123456789";
// console.log(str1);
// console.log(str1.padStart(20));
// console.log(str1.padStart(20, "*"));
// console.log(str1.padStart(20, "*").length);
// console.log(str1);

// desafio

// let telefone1 = "99144-5356"; // 9****-**56
// let telefone2 = "1234-2345"; // "1***-**45
// function mascararTelefone(numero){
//     let hifemPosição = numero.indexOf("-");
//     let numeroInicio = numero.slice(0, hifemPosição);
//     let numeroFinal = numero.slice(hifemPosição + 1);
//     let doisNumerosFinais = numeroFinal.slice(-2);
//     console.log(numero);
//     return `${numeroInicio[0].padEnd(numeroInicio.length, "*")} - ${doisNumerosFinais.padStart(numeroFinal.length,"*")}`

// }

// console.log("----------- telefone 1 -----------");
// console.log(mascararTelefone(telefone1));
// console.log("----------- telefone 2 -----------");
// console.log(mascararTelefone(telefone2));

// metodo startsWith() e endsWith()

// str2 = "Hoje é Sábado";
// console.log(str2[1]);
// console.log(str2.startsWith("Hoje",0));
// console.log(str2.endsWith("Sábado",2));
// console.log(str2.endsWith("é",6));


// metodo charAt() e charCodeAt()

str3 = "abcdefgh";
console.log(str3.charAt(1));
console.log(str3.charCodeAt(1));


