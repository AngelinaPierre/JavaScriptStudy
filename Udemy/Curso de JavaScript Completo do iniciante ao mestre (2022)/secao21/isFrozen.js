const obj1 = {
    nome: "Angelina",
};

const obj2 = {
    nome: "Maria",
};

// CONGELANDO SEM UTILIZAR O FREEZE
// essa propriedade ainda pode ser extendida [prevent]
Object.defineProperty(obj2, "nome", {
    writable: false,
    configurable: false, 
});
// para que ela fique congelada de verdade, fazemos:
Object.preventExtensions(obj2); // CONGELANDO


console.log(Object.freeze(obj1));
console.log(Object.isFrozen(obj1)); // true
console.log(Object.isFrozen(obj2)); // false ||| true 


/**

Assim como temos o método isFrozen() para verificar se um objeto está freeze ou não, temos mais dois métodos com nomes bastante auto-explicativos:

Object.isSealed() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed

Object.isExtensible() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible

*/

