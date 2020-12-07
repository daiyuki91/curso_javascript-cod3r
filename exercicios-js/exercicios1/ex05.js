function real(valor) {
	return `R$ ${valor.toFixed(2).replace('.',',')}`;
}

valor = 0.1+0.2
console.log(valor, real(valor));
valor = 1+3
console.log(valor, real(valor));
valor = 0.5+0.9999
console.log(valor, real(valor));
