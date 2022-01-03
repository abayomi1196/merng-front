import { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("merng-token", JSON.stringify(action.payload));
      return { ...state, user: action.payload };

    case "LOGOUT":
      localStorage.removeItem("merng-token");
      // window.location.reload();
      return { ...state, user: null };

    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("merng-token")),
  });

  function login(userData) {
    dispatch({ type: "LOGIN", payload: userData });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  useEffect(() => {
    // 1- if there is a token, decode it to check the expiration date
    // 2 - if it has expired (time in milliseconds is less than now), delete the token, else continue to use said token

    if (state.user) {
      const decodedToken = jwtDecode(state.user.token);

      if (decodedToken.exp * 1000 < Date.now()) {
        logout();
      }
    } else {
      logout();
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
