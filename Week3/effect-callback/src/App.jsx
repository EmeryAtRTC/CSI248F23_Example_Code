import { useState } from "react";
import Counter from "./Components/Counter";
import Area from "./Components/Area";
import Time from "./Components/Time";
import Joke from "./Components/Joke";
import UpdateMessage from "./Components/UpdateMessage";
import StudentList from "./Components/StudentList";
function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <h2>App</h2>
      <Counter />
      <Area />
      <Time />
      <Joke />
      <h3>Message is: {message}</h3>
      {/* pass the setMessage function as a prop */}
      <UpdateMessage setMessage={setMessage} />
      <StudentList />
    </>
  );
}

export default App;
