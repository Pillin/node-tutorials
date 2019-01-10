function *range (from, to) {
	for( let index=from; index <= to; index++) {
		yield index;
	}
}

for (let r of range(5, 10)) {
    console.log( r );
}
