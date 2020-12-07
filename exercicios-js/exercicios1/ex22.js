function calcularPagamento(numMes, valorAnuidade) {
	if (!Number.isInteger(numMes) || numMes<1 || numMes>12)
		return 'entrada inválida';
	
	return `R$${(valorAnuidade*(1.05)**(numMes-1)).toFixed(2).replace('.',',')}`;

}

for(let i=0; i<=13;i++){
	let valorAnuidade = 100;
	console.log('Valor Pago:', calcularPagamento(i, valorAnuidade));
}
