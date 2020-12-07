function anoBissexto(ano) {
	if (!(ano%400)) {
		console.log(`O ano ${ano} é bissexto`);
		return true;
	}
	if (!(ano%100)) {
		console.log(`O ano ${ano} NÃO é bissexto`);
		return false
	}
	if (!(ano%4)) {
		console.log(`O ano ${ano} é bissexto`);
		return true;
	}
	
	console.log(`O ano ${ano} NÃO é bissexto`);
	return false;

}

anoBissexto(1258);
anoBissexto(1960);
anoBissexto(2020);
anoBissexto(1600);
anoBissexto(1800);
