import { createContext, useContext, useState } from "react";

const UserContext = createContext(); // Create a context for user data

export const useUser = () => useContext(UserContext); // Custom hook to use the UserContext

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [username, setUsername] = useState(null); // State for username

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
