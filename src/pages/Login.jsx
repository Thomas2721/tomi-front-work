import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../services";
import { useSnackbar } from "notistack";
import styles from "../css/login.module.css";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   navigate("/home");
    // }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    axiosInstance
      .post("https://work-out-back.onrender.com/user/signin", {
        emailAddress,
        password,
      })
      .then((response) => {
        const { token, emailAddress } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("emailAddress", emailAddress);
          enqueueSnackbar("Login successful", { variant: "success" });
          navigate("/home", { state: { emailAddress } }); // Redirect to Home
        } else {
          enqueueSnackbar("Login failed. Please try again.", {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        enqueueSnackbar(error.response?.data?.message || "Login failed", {
          variant: "error",
        });
        console.error("Login error:", error);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <h2 className={styles.header}>Log In </h2>
        <form onSubmit={handleLogin}>
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
              Login
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
