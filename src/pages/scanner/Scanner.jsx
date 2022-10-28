import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import styles from "./scanner.module.css";
import { NavLink, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Scanner = () => {
  const [text, setText] = useState();
  const { title } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.arrowIcon}>
          <NavLink>
            <ArrowBackIosIcon />
          </NavLink>
        </div>
        <div className={styles.headerTitle}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.camStyle}>
        <QrReader
          onResult={(result, error) => {
            if (result) {
              setText(result.text);
            }

            if (error) {
              console.log(error);
            }
          }}
        />
        <div className={styles.success}>
          <img src="" alt="" />
          <p>Добавлено</p>
          <span>{text}</span>
        </div>
      </div>
      <div className={styles.basket}>
        <NavLink className={styles.basketNav}>
          <div className={styles.basketIcon}>
            <ShoppingBasketIcon />
          </div>
          <div className="basketTitle">
            <p>Корзина</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Scanner;
