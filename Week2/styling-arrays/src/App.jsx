import UserCard from "./Components/UserCard";
import StyledInComponent from "./Components/StyledInComponent";
import StyleWithProps from "./Components/StyleWithProps";
//import the css
import "./App.css";

function App() {
  return (
    <>
      <h2>App</h2>
      <UserCard
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
      ></UserCard>
      <StyledInComponent
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
      ></StyledInComponent>
      <StyleWithProps
        backgroundColor={"darkBlue"}
        color={"white"}
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
      ></StyleWithProps>
    </>
  );
}
export default App;
