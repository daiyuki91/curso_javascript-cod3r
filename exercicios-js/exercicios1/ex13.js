function verificaDiaSemana(numDia) {
	switch (numDia) {
		case 1:
		case 7:
			console.log('fim de semana');
			break;

		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			console.log('dia útil');
			break;

		default:
			console.log('dia inválido');

	}
}

for (let n=0; n<8; n++) {
	verificaDiaSemana(n);
}

