const xs = new Array(32);

for (const x of xs) {
  // Prints `undefined` 32 times.
  // console.log(x);
}

xs.forEach(x => {
  // WARNING! Prints *0* times.
  // There is a difference between `null`, `undefined` and `<empty>`.
  // In this case array contains 32 `<empty>` entries and they can't be
  // iterated using `forEach`, `map`, `filter`, `reduce`.

  // SOLUTION
  // To fix the problem, use `xs.fill(<initial_value>)`.
  console.log(x);
});
