import React from "react";
import styles from "./Square.module.css";

function Square({ show }) {
  return (
    <div className={[styles.square, show ? styles.show : null].join(" ")} />
  );
}

export default Square;
