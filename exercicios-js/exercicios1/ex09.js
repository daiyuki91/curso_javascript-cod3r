function avaliacao(nota) {
	
	if (nota<0 || nota>100)
		return 'nota inválida!';


	if (nota < 38)
		return `Resultado: REPROVADO (nota=${nota})`;
	else {
		let notaArredondada;
		
		let resto = nota%5;

		if (resto < 3) {
			notaArredondada = nota-resto;
		} else {
			notaArredondada = nota+(5-resto);
		}

		return `Resultado: APROVADO (nota=${notaArredondada})`;
	}

}

let notaMax = 100;
let notaMin = 0;

for (let n=0; n<10; n++){
	let nota = Math.random()*(notaMax-notaMin) + notaMin;

	console.log(avaliacao(parseInt(nota)));
}


