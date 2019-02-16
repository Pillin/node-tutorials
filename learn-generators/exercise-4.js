function *upper (items) {
	let value = '';
	for (let index in items) {
		try {
			yield items[index].toUpperCase();
		} catch (e) {
			yield null;
		}
	}
}

const bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
