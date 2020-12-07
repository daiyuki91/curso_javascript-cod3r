function divisivelPor3 (num) {
	return !(num%3);
}

for (let n=0; n<10; n++) {
	let num = parseInt(Math.random()*(100-0) + 0);
	console.log(num,divisivelPor3(num));
}
