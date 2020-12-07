function multiplicar (vetor, fator) {
	
	let novoVetor = [];

	vetor.forEach(num=>{
		novoVetor.push(num*fator);
	});

	return novoVetor;

}

function multiplicarSe (vetor, fator) {
	
	let novoVetor = [];

	vetor.forEach(num=>{
		if (num<=5) return false;
		else novoVetor.push(num*fator);
	});

	return novoVetor;

}

let fator = 10;

let v1 = [1, 2, 3, 4, 5, 6];
console.log(v1,multiplicar(v1, fator), multiplicarSe(v1,fator))

console.log('--------------')

let v2 = [10, 20, 30, 40, 50, 60];
console.log(v2,multiplicar(v2, fator), multiplicarSe(v2,fator))

