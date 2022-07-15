import React from "react";
import "../css/login.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { LoginContext } from "../context/loginContext";
import { Button } from "@mui/material";

export const Login = () => {
  const nav = useNavigate();

  const { dispatch } = useContext(LoginContext);

  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    nav("/signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        nav("/");
      })
      .catch((error) => {
        setErr(true);
      });
  };
  return (
    <div className="login">
      <h1>Login!</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginbut" type="submit">
          Login
        </button>
        {err && <span>Wrong email or password!</span>}
        <Button onClick={signup} className="signbut">
          Sign Up!
        </Button>
      </form>
    </div>
  );
};
