import { useState } from "react";
function Counter() {
  //lets create a state variable called counter
  const [counter, setCounter] = useState(0);
  //lets make a function that handles the click event for increment
  function handleIncrement() {
    //we want to set the value of counter to counter + 1
    //this create a race condition
    //setCounter(counter + 1);
    //setCounter((previousState) => previousState + 1)
    setCounter((previousCounter) => previousCounter + 1);
  }
  return (
    <>
      <h2>Counter</h2>
      <p>Current Count: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() => setCounter((previousCounter) => previousCounter - 1)}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
