import { useEffect, useState } from "react";
function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //Lets use an effect to create an interval
  //create the interval and then clear the interval in the cleanup function
  useEffect(() => {
    const myTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    //if I return a function from inside of the callback function
    //that will run when the component is unmounted
    return () => {
      clearInterval(myTimer);
    };
  }, []); // this effect runs once on component render
  return (
    <>
      <h2>Current Time: {time}</h2>
    </>
  );
}

export default Time;
