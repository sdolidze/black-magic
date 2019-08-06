const fn = () => console.log(a);

// ReferenceError: a is not defined
fn();

const a = '1';

// Prints '1'
fn();
