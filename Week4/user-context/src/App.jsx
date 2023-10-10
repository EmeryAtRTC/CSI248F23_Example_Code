import Header from "./Components/Header";
import Content from "./Components/Content";
import { UserProvider } from "./Providers/UserProvider";
function App() {
  return (
    <>
      <UserProvider>
        <Header></Header>
        <Content></Content>
      </UserProvider>
    </>
  );
}

export default App;
