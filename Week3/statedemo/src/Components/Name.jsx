import { useState } from "react";
//ffc tab
function Name() {
  //We add variables to state inside of function, but before the return
  //useState is a hook and must be used inside a functional component.
  //useState returned an array with two elements
  //The first element is the variable itself
  //The second element is a function used to update the variable
  //The parameter passed to useState() is the initial value
  //   const stateArray = useState("hello");
  //   console.log("Logging the state:");
  //   console.log(stateArray[0]);
  //   console.log("Logging the function");
  //   console.log(stateArray[1]);
  //a common way to declare a variable and its setter is to use destructuring
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  console.log(firstName);
  console.log(setFirstName);
  function handleFirstNameChange(event) {
    //lets just log this and make sure its working
    //console.log(event.target.value);
    //This is asynchronous
    setFirstName(event.target.value);
    //set the full name
    //Why is this always one character behind?
    setFullName(firstName + " " + lastName);
  }
  function handleLastNameChange(event) {
    //lets just log this and make sure its working
    //console.log(event.target.value);
    setLastName(event.target.value);
    //set the full name
    setFullName(firstName + " " + lastName);
  }
  return (
    <>
      <h2>Name</h2>
      <div>
        <label htmlFor="first-name">Enter your first name:</label>
        <input
          value={firstName}
          onChange={handleFirstNameChange}
          id="first-name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="last-name">Enter your last name:</label>
        <input
          value={lastName}
          onChange={handleLastNameChange}
          id="last-name"
          type="text"
        />
      </div>
      <div>
        <h4>Your first name is: {firstName}</h4>
        <h4>Your last name is: {lastName}</h4>
        <h4>Your full name is: {fullName}</h4>
      </div>
    </>
  );
}

export default Name;
