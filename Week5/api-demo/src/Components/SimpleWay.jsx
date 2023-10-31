import { useState, useEffect } from "react";
function SimpleWay() {
  const [posts, setPosts] = useState([]);
  //We want to send an API Call when the component loads
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       //parse the response to json
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data))
  //       .catch((error) => console.log(error));
  //   }, []);
  //Lets make our fetch question with async/await and try/catch
  //inside of useEffect I am going to define an async function
  useEffect(() => {
    //define an async function
    const fetchData = async () => {
      //try my fetch call
      try {
        //await the response from fetch
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        //I have to check the response in fetch
        //ok is true if the status code is between 200-299
        if (!response.ok) {
          throw new Error("Reponse not ok");
        }
        //now I am ready to parse my data to json
        const data = await response.json();
        //set the data
        setPosts(data);
      } catch (error) {
        console.log(`There was an error ${error.message}`);
      }
      //call the function
      fetchData();
    };
  }, []);
  return (
    <>
      <h2>SimpleWay</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SimpleWay;
