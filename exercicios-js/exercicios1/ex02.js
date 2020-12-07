function classificarTriangulo(a,b,c) {
	let classificacao;

	if((a===b)&&(b===c))
		classificacao = 'equilátero';
	else if ((a===b)||(b===c)||(a===c))
		classificacao = 'isósceles';
	else
		classificacao = 'escaleno';

	console.log('este triângulo é', classificacao);
}

classificarTriangulo(1,1,1)
classificarTriangulo(2,2,3)
classificarTriangulo(10,20,30)
