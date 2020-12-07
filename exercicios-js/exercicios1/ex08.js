function resultTemporada(resultados) {
	let resultArray = resultados.split(' ');
	
	let bestResult = parseInt(resultArray[0]);
	let worstPontuationGame = 1;
	let worstPontuation = parseInt(resultArray[0]);
	let record = 0;

	resultArray.forEach((result, game)=>{
		
		result = parseInt(result);

			if (bestResult < result) {
				bestResult = result;
				record++;
			}
			if (worstPontuation > result){
				worstPontuation = result;
				worstPontuationGame = game+1;
			}
		

		//console.log(result, bestResult, record)

	});

	console.log('pontuações:', resultArray);
	console.log([record, worstPontuationGame])
}

resultados='10 20 20 8 25 3 0 30 1';
resultTemporada(resultados)

resultados= '1 2 10 10 5 15 30 41';
resultTemporada(resultados)
