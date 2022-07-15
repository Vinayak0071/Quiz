import React from "react";
import { useContext } from "react";
import { UrlContext } from "../context/UrlContext";
import { LoginContext } from "../context/loginContext";
import { Nav } from "./Nav";

export const Welcome = () => {
  const { currentUser } = useContext(LoginContext);
  return (
    <div>
      <Nav />
      <h1>Welcome</h1>
    </div>
  );
};
