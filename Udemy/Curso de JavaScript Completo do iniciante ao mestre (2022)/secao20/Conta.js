// classe abstrata cliente

class Cliente {
    constructor(nome, numeroDocumento, tipoDocumento){
        // verificação para tornar classe abstrata
        if(this.constructor === Cliente){
            throw new Error("Cliente is an Abstract class. Can not be instanciated!");
        }
        if(nome && numeroDocumento && tipoDocumento){
            this.nome = nome;
            this.numeroDocumento = numeroDocumento;
            this.tipoDocumento = tipoDocumento;
        }
    }
}

// classe pessoa fisica
class PessoaFisica extends Cliente {
    constructor(nome, numeroDocumento){
        super(nome, numeroDocumento, "CPF");
    }
}

// classe pessoa juridica
class PessoaJuridica extends Cliente {
    constructor(nome, numeroDocumento){
        super(nome, numeroDocumento, "CNPJ");
    }
}

// classe abstrata conta bancaria
class ContaBancaria {
    constructor(cliente, numero){
        // verificação para tornar classe abstrata
        if(this.constructor === ContaBancaria){
            throw new Error("ContaBancaria is an Abstract class. Can not be instanciated!");
        }

        if(cliente && numero){
            this.cliente = cliente;
            this.numero = numero;
            this.saldo = 0;;
        }
    };

    depositar(value){
        this.saldo += value;
    };
    // metodo que obrigatoriamente precisa ser implementado
    static sacar(value){
        throw new Error("Method sacar() needs to be implemented!");
    }

    // metodo para recueprar dados dos clientes
    get dadosCliente(){
        return `${this.cliente.nome}, ${this.cliente.tipoDocumento}: ${this.cliente.numeroDocumento}`
    }
}

// classe estatica com metodo estatico para transferencia entre contas
class Transferir {
    static transfer(contaOrigem, contaDestino, value){
        // verificação se as contas são isntancias de conta bancaria
        if(!contaOrigem instanceof ContaBancaria || ! contaDestino instanceof ContaBancaria){
            throw new Error("Accounts needed to inherit from ContaBancaria");
        }

        try {
            contaOrigem.sacar(value);
            contaDestino.depositar(value);
        } catch (error) {
            console.log("Error: ", error.message);
        }
    }
}

// classe conta poupança
class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero);
        this.aniversario = Date.now();
    }
    // metodo scar obrigatorio
    sacar(value){
        let disponivel = this.saldo;
        if(disponivel < value){
            throw new Error("Saldo Insuficiente!");
        }
        this.saldo -= value;
    }
}

// classe conta corrente

class ContaCorrente extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero);
        this.limite = 0;
    };

    // metodo sacar obrigatorio
    sacar(value){
        let disponivel = this.saldo + this.limite;
        if(disponivel < value){
            throw new Error("Saldo Insuficiente!");
        }
        this.saldo -= value;
    }
}

const angelina =  new PessoaFisica("Angelina", "14.031.904-29");
const pierre = new PessoaJuridica("Pierre LTDA", "860.402.225/0001-01");
const contaP1 = new ContaPoupanca(angelina, 1);
const contaP2 = new ContaPoupanca(pierre, 2);
const contaC1 = new ContaCorrente(angelina, 1);
const contaC2 = new ContaCorrente(pierre, 2);

console.log(contaP1);
console.log(contaP2);
console.log(contaC1);
console.log(contaC2);