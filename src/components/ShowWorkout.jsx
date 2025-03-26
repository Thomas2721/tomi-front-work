import React, { useEffect, useState } from "react";
import "../css/showbook.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ShowWorkout = ({ workouts = [] }) => {
  const [timeAgo, setTimeAgo] = useState("Just now");

  useEffect(() => {
    const startTime = Date.now();

    const updateTime = () => {
      const secondsAgo = Math.floor((Date.now() - startTime) / 1000);
      if (secondsAgo < 60) {
        setTimeAgo("less than a minute ago");
      } else {
        setTimeAgo(`${Math.floor(secondsAgo / 60)} minutes ago`);
      }
    };

    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {workouts && workouts.length === 0 ? (
        <p></p>
      ) : (
        workouts.map((workout) => (
          <div className="div" key={workout._id}>
            <div>
              <h1 className="title">{workout.exercise_title}</h1>
              <span>Load (kg): {workout.load}</span>
              <br />
              <span>Reps: {workout.reps}</span>
              <p>{timeAgo}</p>
            </div>
            <div>
              <Link
                to={`/workouts/delete/${workout._id}`}
                style={{ color: "black", fontSize: "24px" }}
              >
                <MdDelete />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowWorkout;
