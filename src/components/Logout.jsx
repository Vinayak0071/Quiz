import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import React from "react";

export const Logout = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Sign-out successful");
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Button onClick={handleLogout} />
    </div>
  );
};
