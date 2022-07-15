import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { db } from "../firebase";
import { RenderSingle } from "./RenderSingle";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

export const Single = () => {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    err: "",
    data: null,
  });
  const { userid } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "users");
        const q = query(colRef, where("username", "==", userid));
        let user = [];
        onSnapshot(q, (snapshot) => {
          snapshot.docs.forEach((doc) => {
            user.push({ ...doc.data(), id: doc.id });
          });
          setQuizFetch({
            isLoading: false,
            err: "",
            data: user,
          });
        });
      } catch (e) {
        setQuizFetch({
          isLoading: false,
          err: "Something went wrong plz try again later",
          data: null,
        });
      }
    };
    fetchData();
  }, []);
  const { isLoading, err, data } = quizFetch;
  let contents;
  if (isLoading) contents = <Loading />;
  else if (err !== "") contents = <Error />;
  else contents = <RenderSingle data={data} />;
  return <div>{contents}</div>;
};
