import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../components/search/SearchBar";
import styles from "./header.module.css";
import shop from "../../../data.json";

const Header = () => {
  // const handleOpen = () => {
  //   setOpen(!open);
  // };
  return (
    <div>
      <h2>
        <SearchBar data={shop} />
      </h2>
    </div>
  );
};
export default Header;
