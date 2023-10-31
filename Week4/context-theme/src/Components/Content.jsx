//inside of a component that needs access to context
import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeContext";

function Content() {
  //call useContext and provide the Context that you create
  //we ask for whatever data we need from the context
  const { theme, toggleTheme } = useContext(ThemeContext);
  //create a styles object based on the theme
  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#000",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
  };
  return (
    <>
      <div style={styles}>
        <h2>This is the {theme} theme</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default Content;
