import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/addWorkout.css";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import ShowWorkout from "../components/ShowWorkout";

const AddWorkout = () => {
  const [exercise_title, setExercise_title] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const fetchWorkouts = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://work-out-back.onrender.com/workouts", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setWorkouts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  console.log(workouts);

  const handleSave = () => {
    const data = { exercise_title, load, reps };
    const token = localStorage.getItem("token");

    axios
      .post("https://work-out-back.onrender.com/workouts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        enqueueSnackbar("Workout added successfully!", { variant: "success" });
        fetchWorkouts();
        setExercise_title(" ");
        setLoad(" ");
        setReps(" ");
        setTimeout(() => {
          navigate("/home", { state: { workouts } });
        }, 500);
      })

      .catch((error) => {
        console.error(error);
        enqueueSnackbar("Failed to add workout. Please try again.", {
          variant: "error",
        });
      });
  };

  return (
    <div className="createTable">
      <ShowWorkout workouts={workouts} />

      <div className="form">
        <h3 className="title">Add a New Workout</h3>
        <div className="inpt">
          <label className="label">Exercise Title:</label>
          <input
            type="text"
            className="in"
            value={exercise_title}
            onChange={(e) => setExercise_title(e.target.value)}
          />
        </div>
        <div className="inpt">
          <label className="label">Load (in kg):</label>
          <input
            type="text"
            className="in"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
        </div>
        <div className="inpt">
          <label className="label">Reps:</label>
          <input
            type="text"
            className="in"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSave}>
          Add Workout
        </button>
      </div>
    </div>
  );
};

export default AddWorkout;
