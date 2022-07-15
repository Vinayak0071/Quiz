import React from "react";
import { Nav } from "./Nav";

export const RenderSingle = (props) => {
  const { username, score, games } = props.data[0];
  console.log(username);
  return (
    <div>
      <Nav />
      <h1>Username: {username}</h1>
      <h3>Total Games Played: {games}</h3>
      <h3>Total Score: {score}</h3>
    </div>
  );
};
