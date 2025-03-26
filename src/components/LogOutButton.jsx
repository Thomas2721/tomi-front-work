import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/addWorkout.css";

const LogOutButton = () => {
  const navigate = useNavigate();
  const [emailAddressLocal, setEmailAddressLocal] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("emailAddress");
    setEmailAddressLocal(email); 
    console.log(email);
    if (email === null) {
      navigate("/");
    }
  }, [navigate]); 
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("emailAddress"); 
    navigate("/");
  };

  
  return (
    <div>
      <span><span>Welcome </span>
        {emailAddressLocal && (
          <span
            style={{
              fontSize: "15px",
              color: "black",
              marginRight: "10px",
            }}
          >
            {emailAddressLocal}
          </span>
        )}
      </span>

      <button className="bt" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default LogOutButton;
