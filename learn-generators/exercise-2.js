function *factorial (num) {
	let value = 1;
	for(let index=value; index <= num; ++index) {
		value*=index;
		yield value;
	}
}

for (var n of factorial(5)) {
	console.log(n);
}
