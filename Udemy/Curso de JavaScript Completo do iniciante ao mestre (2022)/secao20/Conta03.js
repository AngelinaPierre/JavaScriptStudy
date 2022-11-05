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
        super(cliente,numero,saldo);
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
        super(cliente, numero, saldo);
        this.aniversario = Date.now;
    };

    // metodo sacar precisa ser implementado
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(value > disponivel){
            throw new Error("Saldo insuficiente");
        };
        // console.log(`\n[Saque: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
    }
}


// classes professor

class Cliente {
    constructor(nome, numeroDocumento){
        
        this.nome = nome;
        this.numeroDocumento = numeroDocumento;
    }
}


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
        // console.log(`\n[DepositoP: ${value}]\n\nCliente: ${this.cliente}\nSaldo Atual: ${this.saldo}\nSaldo Final: ${this.saldo += value}`);
        this.saldo += value;
    };

    static sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    }
}


class ContaPoupancaProf extends ContaBancariaProf{
    constructor(cliente, numero){
        super(cliente, numero);
        this.aniversario = Date.now();
    }

    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(value > disponivel){
            throw new Error("Saldo insuficiente");
        };
        // console.log(`\n[SaqueP: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
        this.saldo -= value;
    }
}
class ContaCorrenteProf extends ContaBancariaProf{
    constructor(cliente, numero){
        super(cliente, numero);
        this.limite = 0;
    }
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(disponivel < value){
            throw new Error("Saldo Insuficiente!");
        }
        // console.log(`\n[SaqueP: ${value}]\n\nCliente: [${this.cliente}]\nSaldo Atual: [${this.saldo}]\nLimite: [${this.limite}]\nSaldo Final: [${this.saldo -= value}]`);
        this.saldo -= value;
    }
}

const angelina = new Cliente("Angelina", 123);
const pierre  = new Cliente("Pierre", 423);

const conta1 = new ContaPoupancaProf(angelina, 1);
const conta2 = new ContaCorrenteProf(angelina, 2);
const conta3 = new ContaPoupancaProf(pierre, 3);
const conta4 = new ContaCorrenteProf(pierre, 5);


conta1.depositar(2000);
conta1.sacar(400);

conta1.depositar(300);
conta1.limite = 200;
conta1.sacar(50);

console.log(conta1);
console.log(conta2);
console.log(conta3);
console.log(conta4);

