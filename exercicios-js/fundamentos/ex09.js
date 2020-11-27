const a = [7.7, 8.9, 6.3, 9.2];

console.log(a[0], a[3])
console.log(a[4])

a[10] = 1111;

console.log(a)
console.log(a.length)

a.push({id:3}, false, null, 'teste') //nao é recomendável
console.log(a)


console.log(a.pop())
console.log(a)
delete a[0]
console.log(a)


console.log(typeof a)

