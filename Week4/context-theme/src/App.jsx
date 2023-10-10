import Children from "./Components/Children";
import { ThemeProvider } from "./Providers/ThemeContext";
import Content from "./Components/Content";
function App() {
  return (
    <>
      <h2>App</h2>
      <ThemeProvider>
        <Children title="Welcome to my app">
          {/* Any content that is passed between the opening component
          tag and closing tag is passed to children */}
          <p>This is a child paragraph</p>
        </Children>
        <Content></Content>
      </ThemeProvider>
    </>
  );
}

export default App;
