//traditional
function add(a, b) {
  return a + b;
}
//anonymous function syntax
const sum = function (a, b) {
  return a + b;
};
//(a, b) go to the following function
const addition = (a, b) => {
  return a + b;
};
//we can shorted it to one line
//if you skip the curly brackets the return is automatic
const addOneLine = (a, b) => a + b;
//if you have only one parameter
const square = (a) => a * a;
//what if there is no parameter
const print = () => console.log("Hello from print");
print();
//what if I had a function that returns a function
const createPrinter = () => () => console.log("Hello from create printer");
//how can I call this?
createPrinter()();
