import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "react-bootstrap/Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { userCols, userRows } from "./datatablesource";
import { Nav } from "./Nav";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "User name",
    width: 150,
    editable: true,
  },
  {
    field: "games",
    headerName: "Games",
    width: 150,
    editable: true,
  },
  {
    field: "score",
    headerName: "Score",
    type: "number",
    width: 110,
    editable: true,
  },
  //   {
  //     field: "timeStamp",
  //     headerName: "Time Stamp",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  {
    field: "timeStamp",
    headerName: "Time Stamp",
    type: "number",
    width: 500,
    editable: true,
  },
];

export const Temp = () => {
  const [data, setData] = useState([]);
  const { currentUser, dispatch } = useContext(LoginContext);
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
  console.log(data);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};
