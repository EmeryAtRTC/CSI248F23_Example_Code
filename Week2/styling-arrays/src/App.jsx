import UserCard from "./Components/UserCard";
import StyledInComponent from "./Components/StyledInComponent";
import StyleWithProps from "./Components/StyleWithProps";
//import the css
import "./App.css";

function App() {
  const users = [
    {
      userName: "john_doe",
      phoneNumber: "123-456-7890",
      email: "john@example.com",
      address: "123 Main Street, Cityville",
    },
    {
      userName: "jane_smith",
      phoneNumber: "987-654-3210",
      email: "jane@example.com",
      address: "456 Elm Street, Townsville",
    },
    {
      userName: "bob_jackson",
      phoneNumber: "555-123-4567",
      email: "bob@example.com",
      address: "789 Oak Street, Villageton",
    },
  ];
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
      {/* <StyleWithProps
        backgroundColor={"darkBlue"}
        color={"white"}
        userName={"test user"}
        phoneNumber={"123-456-7890"}
        email={"none@none.com"}
        address={"123 anywhere lane"}
      ></StyleWithProps> */}
      {/* render a UserCard for each user in the collection */}
      {users.map((user, index) => {
        // inside of here we want to return a component for each user
        return (
          <UserCard
            key={index}
            userName={user.userName}
            phoneNumber={user.phoneNumber}
            email={user.email}
            address={user.address}
          ></UserCard>
        );
      })}
    </>
  );
}
export default App;
