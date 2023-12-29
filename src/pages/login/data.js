import React from "react";
import { Navbar } from "../../navbar/navbar"
import Statelogin from "./Statelogin"
import Tabel from "../DataFetch/Tabel"

const data = () => {
  return (
    <div>
        <Navbar />
        <Statelogin/>
      <Tabel />
    </div>
  );
};

export default data;