function bhaskara (a, b, c) {

	delta = b*b - 4*a*c;

	if (delta < 0)
		return 'Delta negativo';

	return [(-b + Math.sqrt(delta))/(2*a), (-b - Math.sqrt(delta))/(2*a)];

}


console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, 4, 4))
console.log(bhaskara(-2,3,2))

