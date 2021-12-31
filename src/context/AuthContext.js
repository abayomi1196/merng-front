import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("merng-token"));

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // 1- if there is a token, decode it to check the expiration date
    // 2 - if it has expired (time in milliseconds is less than now), delete the token, else continue to use said token

    if (user) {
      const decodedToken = jwtDecode(user.token);

      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("merng-token");
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
