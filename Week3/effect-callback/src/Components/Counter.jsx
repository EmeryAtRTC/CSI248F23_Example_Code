import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  //useEffect Syntax: useEffect(callback, [dependencies])
  //This effect will run EVERY update
  useEffect(() => {
    console.log(`Count is ${count}`);
  }); //No dependency array, so this runs on every render
  return (
    <>
      <h2>Counter: </h2>
      <p>{count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Add 1
      </button>
    </>
  );
}

export default Counter;
