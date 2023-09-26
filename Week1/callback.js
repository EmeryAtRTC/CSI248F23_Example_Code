//a callback function is a function that is passed to another function as an argument
const f1 = (a, b) => a + b;
const f2 = (a, b) => a - b;
//this is a function that takes in a function as a parameter
const calculate = (a, b, callbackfn) => callbackfn(a, b);
//We should get 5
console.log(calculate(2, 3, f1));
//we should get -1
console.log(calculate(2, 3, f2));
//this will print 6
//defining an anonymous function in line
console.log(calculate(2, 3, (a, b) => a * b));
