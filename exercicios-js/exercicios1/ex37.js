function pa(n,a1,r) {
	let vetorPA = [];

	for (let i=1; i<=n; i++){
		vetorPA.push(a1+(i-1)*r);
	}
	
	let soma = 0;

	vetorPA.forEach(num=>{
		soma+=num;
	});

	console.log('PA: ' + vetorPA, 'Soma: ' + soma);
}

function pg(n,a1,r) {
	let vetorPG = [];

	for (let i=1; i<=n; i++){
		vetorPG.push(a1*r**(i-1));
	}
	
	let soma = 0;

	vetorPG.forEach(num=>{
		soma+=num;
	});

	console.log('PG: ' + vetorPG, 'Soma: ' + soma);
}

let n = 4;
let a1 = 5;
let r = 2;

console.log('n = '+n,'a1 = '+a1, 'r = '+r) 

pa(n,a1,r)
pg(n,a1,r)
