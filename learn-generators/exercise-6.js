const askFoo = () =>
  new Promise((resolve, reject) => {
    resolve("foo");
  });

const run = generator => {
  const go = result => {
    if (result.done) return result.value;

    return result.value
      .then(value => go(it.next(value)))
      .catch(err => go(it.throw(err)));
  };

  const it = generator();

  go(it.next());
};

run(function*() {
  var foo = yield askFoo();
  console.log(foo);
});
