import React, { useContext } from "react";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import store from "../redux/store";
import { getToken } from "../utils/AuthUtil";

const PrivateRouteUser = ({ component: Component, ...rest }) => {
  const userDetails = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        userDetails.loggedIn && userDetails.role === "local" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRouteUser;
