function pot(base, expoente) {
	
	let result = base;

	for (let n=1; n <= expoente; n++) {
		result = result*base;
	}

	return result;
}

console.log(pot(1,2))
console.log(pot(2,3))
console.log(pot(5,3))
