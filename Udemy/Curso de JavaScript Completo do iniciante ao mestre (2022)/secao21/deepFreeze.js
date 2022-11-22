
/** 

- A forma de congelamento anteiror [metodos2.js] é considerada como `shallow` ou seja, um congelamernto superficial.
- Quando congelamos um objeto da forma acima, estamos congelando simplesmente a primeira camada de propriedades.
- Caso tenhamos um objeto dentro de outro objeto, ou ate mesmo um array dentro de um objeto, essa segunda camada n será congelada por padrão, so nao iremos conseguir fazer uma nova atribuição, mas coseguimos adicionar e incluir propriedades.

 */

const obj1 = {
    foo: "bar",
    internalProp:{}
}
Object.freeze(obj1);
obj1.foo = "alterado"; // congelada -> nao altera
// console.log(obj1);

obj1.internalProp.foo = "bar 2"; // alteravel
// console.log(obj1);

obj1.internalProp = { teste: "teste" }; // nao vai funcionar
// console.log(obj1);

// para congelar a segunda camada, fariamos o seguinte:
Object.freeze(obj1.internalProp);
obj1.internalProp.foo = "bar 3"; // alteravel
// console.log(obj1);

// Para nao termos que escrever uma linha de codigo para cada propriedade interna, podemos trabalhar com uma função recursiva.

function deepFreeze(obj){
    // retorna todas as propriedades inclusive as não enumeradas. diferente do `keys`
    const propNames = Object.getOwnPropertyNames(obj);
    console.log("propNames: " + propNames);
    
    propNames.forEach(name => {
        let prop = obj[name];
        console.log("prop: "+prop);

        // temos que verificar se é diferente de [null] devido a uma falha que
        // existe no javascript. Pois o typeof de [null]  = [Object]
        if(typeof prop === "object" && prop != null){
            deepFreeze(prop); // recursividade
        };
    });

    return Object.freeze(obj);
}

// objeto para testar o deepfreeze
const obj2 = {
    foo: "bar",
    internalProp: {
        array: [1,2,3],
        internalObject: {
            teste: "teste",
        }
    }
};
console.log(obj2);
deepFreeze(obj2);
obj2.foo = "alterado";
obj2.internalProp.array.push("alterado"); // Error
obj2.internalProp.internalObject.teste = "alterado objeto interno"
console.log(obj2);





















