//template string
const name = 'Daiyuki'
const concatenacao = 'Olá' + name + '!'
const template = `
	Olá
	${name}!
`

console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1+1}`)


const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`)
