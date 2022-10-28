import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const [items, setItems] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setItems([]);
    } else {
      setItems(newFilter);
    }
    console.log(newFilter);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          onChange={handleFilter}
          type="text"
          placeholder="Выберите магазин"
        />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      {items.length != 0 && (
        <div className={styles.dataResult}>
          {items.slice(0, 4).map((value, key) => {
            return (
              <div key={key} className={styles.dataItem}>
                <NavLink to={`/scanner/${value.title}`}>
                  <p>{value.title}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
