// Se ainda ficou na dúvida sobre o motivo de termos usado Object.getOwnPropertyNames() e não Object.keys() em nossa função deepFreeze, peço que rode o código abaixo e analise o resultado mostrado no console:

const obj = {};

Object.defineProperties(obj, {
    um: {enumerable: true, value: 1},
    dois: {enumerable: false, value: 2},
});

Object.keys(obj); 

Object.getOwnPropertyNames(obj); 