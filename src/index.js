import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UrlContextProvider } from "./context/UrlContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { LoginContext } from "./context/loginContext";
import { LoginContextProvider } from "./context/loginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <LoginContextProvider>
    <DarkModeContextProvider>
      <UrlContextProvider>
        <App />
      </UrlContextProvider>
    </DarkModeContextProvider>
  </LoginContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
