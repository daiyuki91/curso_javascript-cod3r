function numeroPorExtenso(num) {
	switch (num) {
		case 0:
			return 'zero';
		case 1:
			return 'um';
		case 2:
			return 'dois';
		case 3:
			return 'três';
		case 4:
			return 'quatro';
		case 5:
			return 'cinco';
		case 6:
			return 'seis';
		case 7:
			return 'sete';
		case 8:
			return 'oito';
		case 9:
			return 'nove';
		case 10:
			return 'dez';
		default:
			return 'número fora do intervalo';
	}
}

for (let n=0; n<12; n++)
	console.log(n, numeroPorExtenso(n));

