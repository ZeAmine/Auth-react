import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../Context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useGlobalContext();

  return (
    <div>
      <Route
        {...rest}
        render={() => {
          return currentUser ? <Component /> : <Redirect to="/" />;
        }}
      />
    </div>
  );
};

export default PrivateRoute;
