import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./components/Header";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import AddWorkout from "./pages/AddWorkout";
import DeleteWorkout from "./pages/DeleteWorkout";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/workouts/add" element={<AddWorkout />} />
          <Route path="/workouts/delete/:id" element={<DeleteWorkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
