function fatorialInt(num) {
	
	if (!Number.isInteger(num) || num<0) {
		return 'número inválido';
	}

	if (num<2) return 1;
	
	let fatorial=1;

	for (let n=2; n<=num; n++) {
		fatorial*=n;
	}

	return fatorial;

}

num=0; console.log(num, fatorialInt(num));
num=1; console.log(num, fatorialInt(num));
num=2; console.log(num, fatorialInt(num));
num=3; console.log(num, fatorialInt(num));
num=4; console.log(num, fatorialInt(num));
num=5; console.log(num, fatorialInt(num));
num=-10; console.log(num, fatorialInt(num));
num=0.5; console.log(num, fatorialInt(num));


