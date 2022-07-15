import React from "react";
import "../css/signup.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { LoginContext } from "../context/loginContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button } from "@mui/material";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export const SignUp = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);

  const handleAdd = async (e) => {
    try {
      console.log(email);
      console.log(password);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        username: username,
        curr: 0,
        score: 0,
        games: 0,
        totalC: 0,
        totalA: 0,
        Ratio: 0,
        timeStamp: serverTimestamp(),
      });
      alert("Success");
      nav("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up!</h1>
      <form>
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
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={handleAdd} className="signbut">
          Sign Up!
        </Button>
        {/* {err && <span>Wrong email or password!</span>} */}
      </form>
    </div>
  );
};
