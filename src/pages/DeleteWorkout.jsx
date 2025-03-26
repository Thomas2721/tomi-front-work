import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteWorkout = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleDeleteWorkout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`https://work-out-back.onrender.com/workouts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      navigate("/workouts/add");
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleDeleteWorkout();
  }, [id]);

  return (
    <div className="p-4">
     
    </div>
  );
};

export default DeleteWorkout;
