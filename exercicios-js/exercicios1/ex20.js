function minCedulas(valor) {
	
	let resp=[];
	
	let quantCedula;
	let resto;
	let cedulas = [100, 50, 10, 5, 1];
	
	resto = valor;

	cedulas.forEach((cedula)=>{
		
		if (resto>=cedula) {
			quantCedula = Math.floor(resto/cedula);
			resp.push(`${quantCedula} nota(s) de R$${cedula}, `);
			
			resto = valor%cedula;

		}

	});
	
	console.log(valor, resp.join(' '));

}


for (let n=0; n<10; n++){
	let valorEntrada = Math.floor(Math.random()*(500-1)+1);
	minCedulas(valorEntrada);
}

minCedulas(56)

