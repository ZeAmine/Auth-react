import React from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    dispatch({
      type: "TOGGLEIN",
    });
  };

  const toggleSignUp = () => {
    dispatch({
      type: "TOGGLEUP",
    });
  };

  return (
    <div className="navbar">
      <button onClick={toggleSignIn}>Connexion</button>
      <button onClick={toggleSignUp}>Inscription</button>
    </div>
  );
};

export default Navbar;
