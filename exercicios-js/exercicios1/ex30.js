function checkMaxMin(vetor){
	
	let maxNum = vetor[0];
	let minNum = vetor[0];

	for (let i=1; i<vetor.length; i++){
		if ( maxNum < vetor[i] ) maxNum = vetor[i];
		if ( minNum > vetor[i] ) minNum = vetor[i];
	}

	console.log('vetor:', vetor);
	console.log(`Maior valor: ${maxNum} | Menor valor: ${minNum}`);
	console.log('-----------\n');

}


for (let n=0; n<3; n++){

	let vetor = [];

	for (let i=0; i<10; i++){
		vetor.push(parseInt(Math.random()*(100)));
	}

	checkMaxMin(vetor);

}
