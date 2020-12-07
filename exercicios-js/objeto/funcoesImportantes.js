const pessoa = {
	nome: 'daiyuki',
	idade: 29,
	peso: 70
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log(pessoa)

Object.entries(pessoa).forEach(([chave, valor])=>{
	console.log(`${chave}: ${valor}`);
})
