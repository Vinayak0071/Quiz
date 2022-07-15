import { createContext } from "react";
import { useReducer, useEffect } from "react";
import loginReducer from "./loginReducer";

const INITIAL_STATE_LOGIN = {
  currentUser: JSON.parse(window.localStorage.getItem("user")) || null,
};

export const LoginContext = createContext(INITIAL_STATE_LOGIN);

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE_LOGIN);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <LoginContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
