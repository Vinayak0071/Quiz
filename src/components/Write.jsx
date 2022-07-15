import React from "react";
import { useState } from "react";

export const Write = () => {
  const [users, setUsers] = useState("djdn");
  return (
    <div
      onClick={() => {
        setUsers("Lol");
      }}
    >
      {users}
    </div>
  );
};
