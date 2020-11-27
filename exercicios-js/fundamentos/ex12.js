//novo recurso do ES2015
//operador destructing

const pessoa = {

	nome: 'Daiyuki',
	idade: 29,
	endereco: {
		logradouro: 'Rua kkk',
		numero: 111
	}

}

const { nome, idade } = pessoa; //operador destructing => recuperar valor de vários campos
console.log(nome, idade);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//const { conta: {ag, num}} = pessoa //não existe, por isso, ocorre um erro
//console.log(pessoa)
