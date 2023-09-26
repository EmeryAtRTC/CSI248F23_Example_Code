//ternary operator
//syntax: boolean condition ? true : false
console.log(2 > 1 ? "2 is greater than 1" : "2 is not greater than 1");
//ternary operator with function
const larger = (a, b) => a > b ? a : b;
console.log(larger(2, 7));
//short ciruiting
console.log(2 > 1 && 3 > 2);
//why is this printing hello
console.log(2 > 1 && "hello");
//truthy values and falsey 
if("hello"){
    console.log("hello is truthy");
}
//this prints 0
console.log(2 > 1 && 0);
//This prints hello
console.log(2 < 1 || "hello");
//function that uses short circuiting
const printName = (firstName) => console.log(firstName || "no name");
//calling our printName
printName("Josh");
printName();
