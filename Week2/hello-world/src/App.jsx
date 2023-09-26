//Before we can use a component we need to import it
import Heading from "./Components/Heading";
//Make a component
//First rules of components
//You can only return one element
//ctrl+shift+p opens the command pallet
//Wrap with an element
function App(){
  return (
    <>
      {/* Lets make it so we can change the content of heading */}
      <Heading headerText="Hello World"></Heading>
      <Heading headerText="My First React App" />
      <Heading headerText={"This component is re-useable"} />
      <p>Check out my React App</p>
    </>
  );
}

export default App;