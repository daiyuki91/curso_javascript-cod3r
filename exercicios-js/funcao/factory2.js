function criarProduto(nome,preco) {
	return {
		nome,
		preco,
		desconto: 10
	}
}

console.log(criarProduto('bolo',10.00));
