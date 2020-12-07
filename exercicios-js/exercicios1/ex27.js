function compararAltura(h0, taxaCresc0, h1, taxaCresc1) {
	
	if (h0<0 || taxaCresc0<1 || h1<0 || taxaCresc1<1) return 'entrada inválida';
	
	if (h0 == h1) return 'As crianças possuem a mesma altura.';
	

	let listAlturas = [h0, h1];
	let listTaxaCresc = [taxaCresc0, taxaCresc1];
	
	let criancaMaisAlta = [0, 1]; //crianca 0 mais alta do que crianca 1
	if (h0<h1) criancaMaisAlta = [1, 0]; //invertendo (caso seja necessario)
	
	console.log(listAlturas, listTaxaCresc, criancaMaisAlta)
	

	let resp = [];
	resp.push(`crianca ${criancaMaisAlta[0]} é mais alta do que crianca ${criancaMaisAlta[1]}.`);

	if (listTaxaCresc[criancaMaisAlta[0]] >= listTaxaCresc[criancaMaisAlta[1]])
		return resp.push('Não será possível ultrapassar a altura').join(' ');

	let tempo = Math.floor((listAlturas[criancaMaisAlta[0]]-listAlturas[criancaMaisAlta[1]])/(listTaxaCresc[criancaMaisAlta[1]]-listTaxaCresc[criancaMaisAlta[0]])) + 1;

	resp.push(`A criança menor ultrapassará a criança maior em ${tempo} anos.`);

	return resp;
}

console.log(compararAltura(130, 5, 150, 1));
