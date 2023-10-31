import { createContext, useState } from "react";
//step 1 - create a context
export const UserContext = createContext();

//step 2: create a provider component
export function UserProvider({ children }) {
  //define our state to hold the user
  const [user, setUser] = useState(null);

  //function to login
  //takes a username and sets the user
  const logIn = (username) => {
    setUser({ name: username });
  };
  //logout function
  const logOut = () => {
    setUser(null);
  };

  //step 3 return the provider component with children
  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
