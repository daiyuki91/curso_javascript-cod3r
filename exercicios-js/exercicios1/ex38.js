function impares(inicio=0, fim=100) {
	
	if (inicio > fim) {
		let aux = inicio;
		inicio = fim;
		fim = aux;
	}

	let impar = [];

	for (let n=inicio; n<=fim; n++) {
		if (n%2 != 0) impar.push(n);
	}

	console.log(`inicio: ${inicio} | fim: ${fim} | impares: ${impar}`);

}

impares();
impares(0,10);
impares(40,30)
