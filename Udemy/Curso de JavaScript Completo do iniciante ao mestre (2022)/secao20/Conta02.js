class ContaBancaria {
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
        console.log(`\n[Deposito: ${value}]\n\nCliente: ${this.cliente}\nSaldo Atual: ${this.saldo}\nSaldo Final: ${this.saldo += value}`);
        // this.saldo += value;
    };
    // metodo precisa ser implementado pelo objeto
    sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    }
};

class ContaCorrente extends ContaBancaria{
    constructor(cliente,numero, saldo){
        super("Angelina", 2, 1000);
        this.limite = 0;
    };

    // metodo sacar precisa ser implementado
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(value > disponivel){
            throw new Error("Saldo insuficiente");
        };
        console.log(`\n[Saque: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo + Limite: [${this.saldo + this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
        // this.saldo -= value;
    };
}

class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero, saldo){
        super("Pierre", 2, 500);
        this.aniversario = Date.now;
    };

    // metodo sacar precisa ser implementado
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(value > disponivel){
            throw new Error("Saldo insuficiente");
        };
        console.log(`\n[Saque: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
    }
}

const contaP = new ContaPoupanca("Angelina", 1, 1000);
const contaC = new ContaCorrente("Pierre", 2, 2000);


// classes professor


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
        console.log(`\n[DepositoP: ${value}]\n\nCliente: ${this.cliente}\nSaldo Atual: ${this.saldo}\nSaldo Final: ${this.saldo += value}`);
        // this.saldo += value;
    };

    static sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    }
}


class ContaPoupancaProf extends ContaBancariaProf{
    constructor(cliente, numero){
        super("Daniel", 1);
        this.aniversario = Date.now();
    }

    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(value > disponivel){
            throw new Error("Saldo insuficiente");
        };
        console.log(`\n[SaqueP: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
    }
}
class ContaCorrenteProf extends ContaBancariaProf{
    constructor(cliente, numero){
        super("Ferreira", 2);
        this.limite = 0;
    }
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(disponivel < value){
            throw new Error("Saldo Insuficiente!");
        }
        console.log(`\n[SaqueP: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
        // this.saldo -= value;
    }
}


const contaPP = new ContaPoupancaProf("Daniel", 3);
const contaCP = new ContaCorrenteProf("Ferreira", 4);


contaPP.depositar(2000);
contaPP.sacar(400);

contaCP.depositar(300);
contaCP.limite = 200;
contaCP.sacar(400);

