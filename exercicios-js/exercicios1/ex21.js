function custoPlanoSaude(idade) {
	let valor = 100;
	
	if (!Number.isInteger(idade) || idade<0) return 'ERRO!';

	if (idade<10) valor+=80;
	else if (idade>=10 && idade<=30) valor+=50;
	else if (idade>30 && idade<=60) valor+=95;
	else valor+=130;
	
	return `R$${valor}`;

}

console.log(custoPlanoSaude(-1));
console.log(custoPlanoSaude(10.05))

for (let i=0; i<8; i++){
	let idade = Math.floor(Math.random()*(100));
	console.log(`Idade: ${idade} => Custo do Plano de Saúde: ${custoPlanoSaude(idade)}`);
}
