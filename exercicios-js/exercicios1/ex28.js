function classificarParImpar(vetor) {
	
	let numPar = 0;
	let numImpar = 0;

	vetor.forEach((num)=>{
		
		if(num%2 == 0) {
			numPar++;
		} else {
			numImpar++;
		}

	});
	
	console.log('vetor:', vetor);
	console.log(`Qtd Pares: ${numPar} | Qtd Impares: ${numImpar}`);
	console.log('------');

}


v1 = [1, 1, 1, 2, 2];
classificarParImpar(v1);

v2 = [1, 2, 3, 4, 5, 6, 10, 20, 31]
classificarParImpar(v2)
