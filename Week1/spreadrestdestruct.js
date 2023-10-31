//spread operator
const arr1 = [1,2,3];
const arr2 = [4,5,6];
//...
const arr3 = [...arr1,...arr2];
console.log(arr3);
//rest operator ...
//The rest of the information
//Whatever else is passed to the function []
const total = (a, b, ...rest) => {
    console.log(rest);
    return a+b;
}

total(1,2,3,4,5);
//destructuring arrays and objects
const [x, y, z] = [10, 15, 20];
//this creates 3 variables x y and z
console.log(x);
console.log(y);
console.log(z);
//destructuring with objects
const stu = {
    name: "Josh",
    phone: "234-567-7964"
};
//creating a name and phone variable from stu
const {name, phone} = stu;
console.log(name);
console.log(phone);
//destructuring with different variable names
const {name: studentName, phone: studentPhone} = stu;
console.log(studentName);
console.log(studentPhone);