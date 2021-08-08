import React, { useRef, useState } from "react";
import "./AuthForm.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext, useGlobalContext } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { signup } = useGlobalContext();
  const showModal = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleClose = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };

  const toggleSignIn = () => {
    dispatch({
      type: "TOGGLEIN",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (inputs.current[1].value !== inputs.current[2].value) {
      setError("Les mots de passe ne sont pas identiques");
      return;
    }

    await signup(inputs.current[0].value, inputs.current[1].value);
    toggleClose();
    history.push("/loggedHome");
  }

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  return (
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div className="overlay">
        <div className="container-modal">
          <form onSubmit={handleSubmit} className="form-auth">
            <h2>Inscription</h2>
            <label htmlFor="mail">Votre email</label>
            <input ref={addInputs} type="email" id="mail" required />

            <label htmlFor="password">Votre mot de passe</label>
            <input ref={addInputs} type="password" id="password" required />

            <label htmlFor="confirmpassword">Confirmer le mot de passe</label>
            <input
              ref={addInputs}
              type="password"
              id="confirmpassword"
              required
            />
            {error}
            <button className="btn-sign">S'inscrire</button>
          </form>
          <button onClick={toggleClose} className="btn-close">
            X
          </button>
          <p onClick={toggleSignIn} className="bottom-help-txt">
            Vous avez déjà un compte
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
