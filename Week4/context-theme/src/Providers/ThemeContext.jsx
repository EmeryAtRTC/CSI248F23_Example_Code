//This files is where the variables
//that are going to be shared are gonna be created
import { createContext, useState } from "react";

//The first thing we do is use createContext to create the context
//The context is imported to any component that needs to access the data
//Context goes to the individual components
export const ThemeContext = createContext();

//We need a Provider Component
//Provider goes to app.jsx
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
