function checkInterval(vetor) {

	let inInterval = 0;
	let outInterval = 0;

	for (let i=0; i<vetor.length; i++){

		if (vetor[i]>=10 && vetor[i]<=20)
			inInterval++;

	}

	outInterval = vetor.length - inInterval;

	console.log('vetor:', vetor);
	console.log(`${inInterval} números dentro do intervalo [10,20] e ${outInterval} fora.`);

	console.log('-------\n');

}

for (let n=0; n<5; n++){

	let vetor = [];

	for (let i=0; i<10; i++){
		vetor.push(parseInt(Math.random()*(100-0)+0));
	}

	checkInterval(vetor);

}
