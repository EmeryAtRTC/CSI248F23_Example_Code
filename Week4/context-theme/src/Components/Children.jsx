import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeContext";
//props in react can be destructured
//instead of using the props object, I can destructure it into
//individual variables
function Children({ title, children }) {
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
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default Children;
