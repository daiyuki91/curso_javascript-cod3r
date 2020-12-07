function avaliacaoAluno(codigoAluno, av1, av2, av3) {

	let listNota = [av1, av2, av3];

	let maiorNota = av1;

	if (maiorNota < av2) maiorNota = av2;
	if (maiorNota < av3) maiorNota = av3;

	let notaFinal=0;
	let resultado;

	listNota.forEach((nota)=>{
		if (maiorNota == nota) notaFinal+=(4*nota);
		else notaFinal+=(3*nota);
	});

	notaFinal/=10;

	if (notaFinal >= 5) resultado = 'APROVADO';
	else resultado = 'REPROVADO';

	console.log(`Aluno: ${codigoAluno} | notas: ${listNota} | média: ${notaFinal.toFixed(1)} => ${resultado}`);


}

for (let i=0; i<5; i++){
	
	let codAluno = i;
	let listNotas = [];
	let nota;

	for (let j=0; j<3; j++){ 
		listNotas.push((Math.random()*(10-0)).toFixed(1));
	}
	
	avaliacaoAluno(codAluno, listNotas[0], listNotas[1], listNotas[2]);

}

