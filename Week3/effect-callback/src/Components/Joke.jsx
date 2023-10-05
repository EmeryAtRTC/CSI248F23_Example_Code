import { useState, useEffect } from "react";
function Joke() {
  const [joke, setJoke] = useState("");
  //a common use of useEffect is to pull data
  //could be from an API, database, file, localStorage
  useEffect(() => {
    //lets create an async function
    async function fetchJoke() {
      try {
        //make the request
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        //parse the response to json
        const data = await response.json();
        //the joke is located at .vale
        setJoke(data.value);
      } catch (error) {
        console.log(`Error fetching joke ${error}`);
      }
    }
    //we can call the function we just created
    fetchJoke();
  }, []);
  return (
    <>
      <h2>Random Chuck Norris Joke</h2>
      <p>{joke}</p>
    </>
  );
}

export default Joke;
