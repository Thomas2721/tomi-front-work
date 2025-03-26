import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/header.module.css";

const Buttons = () => {
  return (
    <div className={styles.btn}>
      <Link to="/">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};

export default Buttons;
