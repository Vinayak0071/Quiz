import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Nav } from "./Nav";
import { auth } from "../firebase";
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
} from "firebase/firestore";
import { async } from "@firebase/util";

export const Calculations = (props) => {
  console.log(props);
  const { currentUser, dispatch } = useContext(LoginContext);
  let correct, totalgames, attempts;
  let data = [];

  const update = async (data) => {
    const rf = doc(db, "users", currentUser.uid);
    await updateDoc(rf, {
      score: props.score,
      games: 1 + data[0].games,
      totalA: data[0].totalA + props.totalQ,
      totalC: data[0].totalC + props.score,
      Ratio: (data[0].totalC + props.score) / (data[0].totalA + props.totalQ),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = collection(db, "users");
        const q = query(ref, where("id", "==", currentUser.uid));
        //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        // onSnapshot(q, (snapshot) => {
        //   snapshot.docs.map((doc) => {
        //     data.push(doc.data());
        //   });
        //   console.log(data);
        //   update(data);
        // });
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push(doc.data());
        });
        update(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   const unsub = onSnapshot(
  //     collection(db, "users"),
  //     (snapShot) => {
  //       let list = [];
  //       snapShot.docs.forEach(
  //         query(collection(db, "users"), where("id", "==", currentUser.uid)),
  //         (doc) => {
  //           list.push({ id: doc.id, ...doc.data() });
  //         }
  //       );
  //       setQuizFetch(list);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   return () => {
  //     unsub();
  //   };
  // }, []);
  // const { isLoading, err, data } = quizFetch;

  // let contents;
  // if (data === []) contents = <Loading />;
  // // else if (err !== "") contents = <Error />;
  // // else if (typeof correct !== "undefined" && typeof attempts !== "undefined") {
  // else {
  //   contents = <Score data={data} />;
  if (data == []) return <Loading />;
  else
    return (
      <div>
        <Score score={props.score} />
      </div>
    );
};

//       // const q1 = query(
//       //   collection(db, "users"),
//       //   where("id", "==", currentUser.uid)
//       // );

//       // const res = await getDocs(q1);
