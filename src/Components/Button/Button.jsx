"use client";

import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button
      className={styles.Logout}
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
};

export default Button;
