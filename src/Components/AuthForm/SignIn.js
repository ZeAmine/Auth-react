import React, { useRef, useState } from "react";
import "./AuthForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { login } = useGlobalContext();

  const showModal = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleClose = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  const toggleSignUp = () => {
    dispatch({
      type: "TOGGLEUP",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(inputs.current[0].value, inputs.current[1].value);
      history.push("/loggedHome");
      toggleClose();
    } catch {
      setError("Email ou mot de passe incorrect.");
    }
  }

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  return (
    <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
      <div className="overlay">
        <div className="container-modal">
          <form onSubmit={handleSubmit} className="form-auth">
            <h2>Connexion</h2>
            <label htmlFor="mail">Votre email</label>
            <input ref={addInputs} type="email" id="mail" required />

            <label htmlFor="password">Votre mot de passe</label>
            <input ref={addInputs} type="password" id="password" required />
            {error}
            <button className="btn-sign">Se connecter</button>
          </form>
          <button onClick={toggleClose} className="btn-close">
            X
          </button>
          <p onClick={toggleSignUp} className="bottom-help-txt">
            Besoin de créer un compte
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
