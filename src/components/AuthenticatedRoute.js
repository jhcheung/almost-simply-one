import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        currentUser.name
          ? <C {...props} currentUser={currentUser} />
          : <Redirect
              to={`/login`}
            />}
    />
  );
}
