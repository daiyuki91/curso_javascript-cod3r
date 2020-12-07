function calcularSalario(planoTrabalho, salarioAtual) {
	
	let aumentoPercentual;

	switch (planoTrabalho) {
		case 'A':
			aumentoPercentual = 10;
			break;
		case 'B':
			aumentoPercentual = 15;
			break;
		case 'C':
			aumentoPercentual = 20;
			break;
		default:
			console.log('Plano inválido');
			return 0;

	}

	console.log(`O novo salário é ${salarioAtual*(1+aumentoPercentual/100)}.`)
}

calcularSalario('A',2000);
calcularSalario('B',2000);
calcularSalario('C',2000);
calcularSalario('M',2000);

