const students = [
  {
    firstName: "John",
    lastName: "Doe",
    phone: "555-555-5555",
    email: "john.doe@example.com",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    phone: "555-555-5556",
    email: "alice.smith@example.com",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    phone: "555-555-5557",
    email: "bob.johnson@example.com",
  },
  {
    firstName: "Sarah",
    lastName: "Williams",
    phone: "555-555-5558",
    email: "sarah.williams@example.com",
  },
  {
    firstName: "David",
    lastName: "Brown",
    phone: "555-555-5559",
    email: "david.brown@example.com",
  },
  {
    firstName: "Emily",
    lastName: "Jones",
    phone: "555-555-5560",
    email: "emily.jones@example.com",
  },
  {
    firstName: "Michael",
    lastName: "Davis",
    phone: "555-555-5561",
    email: "michael.davis@example.com",
  },
  {
    firstName: "Olivia",
    lastName: "Martinez",
    phone: "555-555-5562",
    email: "olivia.martinez@example.com",
  },
  {
    firstName: "William",
    lastName: "Garcia",
    phone: "555-555-5563",
    email: "william.garcia@example.com",
  },
  {
    firstName: "Sophia",
    lastName: "Hernandez",
    phone: "555-555-5564",
    email: "sophia.hernandez@example.com",
  },
];
//filter() creates a new array with elements that meet a specified
const filteredStudents = students.filter(student => student.firstName === "John");
console.log(filteredStudents);
//find() gives you the first element that matches
const foundStudent = students.find(student => student.email === "sophia.hernandez@example.com");
console.log(foundStudent);
//map() makes a new array of a different data type
const studentNames = students.map(student => student.firstName);
console.log(studentNames);
//make a new collection of objects with just lastname and phone
const contactInfo = students.map(student => {
    //Return this new object
    return{
        lastName: student.lastName,
        phone: student.phone
    }
});
console.log(contactInfo);