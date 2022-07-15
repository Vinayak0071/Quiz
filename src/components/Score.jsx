import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "./Nav";
import { Loading } from "./Loading";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut, updatePassword } from "firebase/auth";
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
  updateDoc,
} from "firebase/firestore";

import React from "react";

export const Score = ({ score }) => {
  return <div>Your score is: {score} </div>;
};
