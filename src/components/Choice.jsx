import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import "../css/Choice.scss";
import { Quiz } from "./Quiz";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UrlContext } from "../context/UrlContext";
import { LoginContext } from "../context/loginContext";
import { Nav } from "./Nav";

export const Choice = () => {
  let { Url } = useContext(UrlContext);
  const { currentUser } = useContext(LoginContext);
  const { dispatch } = useContext(UrlContext);
  const [type, setType] = useState("multiple");
  const [diff, setDiff] = useState("easy");
  const nav = useNavigate();
  const [ques, setQues] = useState(3);
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangeDiff = (e) => {
    setDiff(e.target.value);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const change = (e) => {
    setQues(e.target.value);
  };

  const submit = (e) => {
    let url = `https://opentdb.com/api.php?amount=${ques}`;
    if (diff !== "mixed") url = url + `&difficulty=${diff}`;
    if (type !== "mixed") url = url + `&type=${type}`;
    dispatch({ type: "SET", payload: url });
    nav("/quiz");
  };

  return (
    <div>
      <Nav />
      <div className="Choice">
        <h1>Welcome to Quiz App!</h1>
        <Box sx={{ minWidth: 180 }}>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="demo-simple-select-label">Option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Option"
              onChange={handleChangeType}
            >
              <MenuItem value={"multiple"}>Multiple Choice</MenuItem>
              <MenuItem value={"boolean"}>True/False</MenuItem>
              <MenuItem value={"mixed"}>Mixed</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="demo-simple-select-label">Option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={diff}
              label="Option"
              onChange={handleChangeDiff}
            >
              <MenuItem value={"easy"}>Easy</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hard"}>Hard</MenuItem>
              <MenuItem value={"mixed"}>Mixed</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={10}
            onChange={change}
          />
        </Box>
        <Button variant="outlined" onClick={submit}>
          Submit
        </Button>
      </div>
    </div>
  );
};
