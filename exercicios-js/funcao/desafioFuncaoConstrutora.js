class Pessoa {
	constructor(nome){
		this.nome = nome;
	}

	falar(){
		console.log(`Meu nome é ${this.nome}`);
	}
}

const p1 = new Pessoa('Daiyuki');
p1.falar();

const criarPessoa = nome => {
	return {
		falar: () => console.log(`Meu nome é ${nome}`)
	}
}

const p2 = criarPessoa('Fujiyoshi')
p2.falar()

//versão usando função construtora
function Pessoa2(nome){
	this.nome = nome;

	this.falar = function() {
		console.log(`Meu nome é ${this.nome}`);
	}
}

const p3 = new Pessoa('Daiyuki');
p3.falar();
