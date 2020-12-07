function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
	console.log(`Juros simples: ${capitalInicial + capitalInicial*taxaJuros/100*tempoAplicacao}`)
}

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {
	console.log(`Juros composto: ${capitalInicial*(1+taxaJuros/100)**tempoAplicacao}`)
}

jurosSimples(100, 2.5, 12);
jurosComposto(100,2.5, 12);
