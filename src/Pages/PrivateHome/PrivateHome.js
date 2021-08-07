import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SignUp from "../../Components/AuthForm/SignUp";
import SignIn from "../../Components/AuthForm/SignIn";
import "../Home/Home.css";
import { useGlobalContext } from "../../Context/AuthContext";

const PrivateHome = () => {
  const { logout } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <SignIn />
      <SignUp />
      <div className="content-container">
        <h1>Voici votre compte privé.</h1>
        <p>Amusez-vous bien</p>
      </div>
      <button onClick={logout}>Se déconnnecter</button>
    </div>
  );
};

export default PrivateHome;
