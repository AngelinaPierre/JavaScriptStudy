const obj = {
    prop1: "prop 1",
    prop2: "prop 2",
};

// vamos fazer uma copia desse objeto para testarmos 3 metodos diferentes de [Object].

const objFreeze = {...obj};
const objSeal = {...obj};
const objPrevent = {...obj};

// não pode criar, nem atualizar, nem remover propriedades.
Object.freeze(objFreeze); 

// não pode criar, pode atualizar, mas nao pode remover props.
Object.seal(objSeal);

// nao pode criar, pode alterar e pode remover props.
Object.preventExtensions(objPrevent);


/** 

- A forma de congelamento acima é considerada como `shallow` ou seja, um congelamernto superficial.
- Quando congelamos um objeto da forma acima, estamos congelando simplesmente a primeira camada de propriedades.
- Caso tenhamos um objeto dentro de outro objeto, ou ate mesmo um array dentro de um objeto, essa segunda camada n será congelada por padrão, so nao iremos conseguir fazer uma nova atribuição, mas coseguimos adicionar e incluir propriedades.

 */