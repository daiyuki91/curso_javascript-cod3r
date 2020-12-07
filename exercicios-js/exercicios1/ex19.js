function real(valor){
	return `R$${valor.toFixed(2).replace('.',',')}`;
}

function valorTotalProduto(codigoItem, quant) {
	
	let preco;
	switch (codigoItem) {
		case 100:
			preco = 3;
			break;
		case 200:
			preco = 4;
			break;
		case 300:
			preco = 5.5;
			break;
		case 400:
			preco = 7.5;
			break;
		case 500:
			preco = 3.5;
			break;
		case 600:
			preco = 2.8;
			break;
		default:
			console.log('item inexistente');
			return 0;

	}

	return [quant, real(preco), real(quant*preco)];
}

for (let n=1; n<=6; n++) {
	let codigo = n*100;
	let quant = Math.floor(Math.random()*(5-1)+1);

	console.log(codigo, valorTotalProduto(codigo, quant));
}

