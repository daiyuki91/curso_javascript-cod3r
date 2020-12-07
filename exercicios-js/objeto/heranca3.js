const pai = {nome: 'daiyuki', corCabelo: 'preto'}

const filha1 = Object.create(pai);
filha1.nome = 'satie'

console.log(filha1.corCabelo)


const filha2 = Object.create(pai, {
	nome: {value: 'minami', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'haruka' //não vai conseguir (writable: false)

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
	filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}