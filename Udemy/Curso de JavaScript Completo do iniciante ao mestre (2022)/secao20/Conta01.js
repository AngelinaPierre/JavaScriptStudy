class ContaBancaria{
    constructor(cliente, numero, saldo){
        if(this.constructor === ContaBancaria){
            throw new Error("ContaBancaria is an Abstract Class. Can not be Instanciated");
        }
        if(cliente && numero && saldo){
            this.cliente = cliente;
            this.numero = numero;
            this.saldo = saldo;
        }
    };

    // metodo pode ser acessado pelo objeto
    depositar(value){
        this.saldo += value;
    };
    // metodo precisa ser implementado pelo objeto
    sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    }
};

class ContaBancariaProf{
    constructor(cliente, numero){

        if(this.constructor === ContaBancariaProf){
            throw new Error("ContaBancariaProf is an Abstract class. Can not be instanciated!");
        }

        this.cliente = cliente;
        this.numero = numero;
        this.saldo = 0;
    };

    depositar(value){
        this.saldo += value;
    };

    static sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    }
}

const contaAngelina = new ContaBancaria("angelina", 1, 100);
const contaProf = new ContaBancariaProf("Daniel", 2);