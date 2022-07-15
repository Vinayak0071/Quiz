import { createContext } from "react";
import { useReducer } from "react";
import UrlReducer from "./UrlReducer";

const INITIAL_STATE = {
  Url: "https://opentdb.com/api.php?amount=2",
};

export const UrlContext = createContext(INITIAL_STATE);

export const UrlContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UrlReducer, INITIAL_STATE);

  return (
    <UrlContext.Provider value={{ Url: state.Url, dispatch }}>
      {children}
    </UrlContext.Provider>
  );
};
