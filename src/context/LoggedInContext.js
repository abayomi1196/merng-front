import { createContext, useState, useEffect } from "react";

export const LoggedInContext = createContext(null);

export const LoggedInContextProvider = ({ children }) => {
  let tokenVal = localStorage.getItem("merng-token");

  const [loggedIn, setLoggedIn] = useState(tokenVal || false);

  useEffect(() => {
    setLoggedIn(tokenVal);
  }, [tokenVal]);

  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};
