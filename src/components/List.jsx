import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Box } from "@mui/material";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { userCols, userRows } from "./datatablesource";
import { Nav } from "./Nav";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { Single } from "./Single";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

export const List = () => {
  const [data, setData] = useState([]);
  const { currentUser, dispatch } = useContext(LoginContext);
  const nav = useNavigate();
  const renderSingle = (e) => {
    const lnk = `/users/${e.row.username}`;
    nav(lnk);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const colRef = collection(db, "users");
  //     const q = query(colRef);
  //     let user = [];
  //     onSnapshot(q, (snapshot) => {
  //       snapshot.docs.forEach((doc) => {
  //         user.push({ ...doc.data(), id: doc.id });
  //       });
  //       setData(user);
  //     });
  //     const res = await getDocs(q);
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  // const users = data.map((d, i) => {
  //   return <div key={i}>{d.username}</div>;
  // });
  return (
    <div className="datatable">
      <Nav />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userCols}
          pageSize={9}
          onCellClick={renderSingle}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

{
  /* <Box sx={{ height: 400, width: "100%" }}>
  <DataGrid
    rows={data}
    columns={userCols}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
  />
</Box>; */
}
