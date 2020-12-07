function calcular(valor1,operador,valor2) {

	let result=0;

	switch (operador) {
		
		case '+':
			result = valor1+valor2;
			break;
		case '-':
			result = valor1-valor2;
			break;
		case '*':
			result = valor1*valor2;
			break;
		case '/':
			result = valor1/valor2;
			break;
		default:
			console.log('Operação inválida');
			return 0;

	}

	console.log(`${valor1} ${operador} ${valor2} = ${result}`);
}

calcular(1,'+',1);
calcular(0,'-',5);
calcular(3,'*',6);
calcular(20,'/',2);

calcular(1,1,1);
