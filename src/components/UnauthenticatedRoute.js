import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function UnauthenticatedRoute({ component: C, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !currentUser.name
          ? <C {...props} />
          : <Redirect to="/" />}
    />
  );
}
