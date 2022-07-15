import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import "../css/nav.scss";

export const Nav = () => {
  const [name, setName] = useState("");
  const { currentUser, dispatch } = useContext(LoginContext);

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "users");
      const q = query(colRef, where("id", "==", currentUser.uid));
      let user = [];
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          user.push({ ...doc.data(), id: doc.id });
        });
        setName(user[0].username);
      });
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        alert("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar>
        <Container>
          <div onClick={logout}>
            <Navbar.Brand>Logout</Navbar.Brand>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: {name}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
