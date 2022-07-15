import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Nav } from "./Nav";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { db } from "../firebase";
import { useEffect } from "react";
import { Score } from "./Score";
import { useState } from "react";
import { Write } from "./Write";
import {
  getFirestore,
  collection,
  query,
  doc,
  where,
  onSnapshot,
  getDocs,
  updateDoc,
  get,
} from "firebase/firestore";
import { async } from "@firebase/util";

export const Read = () => {
  const [users, setUsers] = useState([]);
  const { currentUser, dispatch } = useContext(LoginContext);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const ref = collection(db, "users");
  //       const q = query(ref, where("id", "==", currentUser.uid));
  //       //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //       onSnapshot(q, (snapshot) => {
  //         setUsers(snapshot.docs.map((doc) => doc.data()));
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function process_tasks() {
      let campaignsRef = db.collection("users");
      let activeRef = await campaignsRef
        .where("id", "==", currentUser.uid)
        .select()
        .get();
      for (let campaign of activeRef.docs) {
        console.log(campaign.id);
        let tasksRef = await campaignsRef
          .doc(campaign.id)
          .collection("users")
          .get();
        for (let task of tasksRef.docs) {
          console.log(task.id, task.data());
        }
      }
    }
    try {
      process_tasks();
    } catch (err) {
      console.log("Error getting documents", err);
    }
  }, []);
  // console.log(users);
  // <div>
  //   <br />
  //   {users.map((u, ind) => (
  //     <div key={ind}>
  //       {u.id} {u.score}
  //     </div>
  //   ))}
  // </div>
  if (users) return <div>dndkd</div>;
  else return <Loading />;
};
