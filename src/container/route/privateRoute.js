import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

let PrivateRoute = ({ component: Component, ...rest }) => {
  const [authorize, setAuthorize] = useState(true);
  return (
    <Route
      {...rest}
      render={(props) =>
        authorize ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
