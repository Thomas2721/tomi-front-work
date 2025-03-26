import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";
// import "../css/login.css";
// import axios from "axios";
import styles from "../css/login.module.css";

import axiosInstance from "../services";

const Signup = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSignUp = async (e) => {
    e.preventDefault();

    await axiosInstance
      .post(
        "https://work-out-back.onrender.com/user/signup",
        {
          emailAddress,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data) {
          enqueueSnackbar("Sign up successfully", { variant: "success" });
          navigate("/");
        } else {
          const errorMsg = response.data.message || "Signup failed."; // ✅ Fix: Check response.data.message
          console.error(errorMsg);
          enqueueSnackbar(errorMsg, { variant: "error" });
        }
      })
      .catch((error) => {
        enqueueSnackbar("An error occurred during signup.", {
          variant: "error",
        });
        console.log(error);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <h2 className={styles.header}>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="inpt">
            <label>Email address :</label> <br />
            <input
              type="text"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="inpt">
            <label>Password :</label> <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
