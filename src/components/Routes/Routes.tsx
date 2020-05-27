import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import HelpPage from "../../pages/HelpPage";
import SignUpPage from "../../pages/SignUpPage";
import SignInPage from "../../pages/SignInPage";
import ResetPassPage from "../../pages/ResetPassPage";
import ProtectedRoute from "./ProtectedRoute";
import { useUser } from "../../userContext";

const Routes: React.FC = () => {
  const { auth } = useUser()!;

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/help" exact component={HelpPage} />
      <ProtectedRoute
        {...{
          isGuest: auth.guest,
          isAllowed: auth.guest,
          userRedirect: "/",
          guestRedirect: "/sign_in",
        }}
        exact={true}
        path="/sign_up"
        component={SignUpPage}
      />
      <ProtectedRoute
        {...{
          isGuest: auth.guest,
          isAllowed: auth.guest,
          userRedirect: "/",
          guestRedirect: "/sign_in",
        }}
        exact={true}
        path="/sign_in"
        component={SignInPage}
      />
      <ProtectedRoute
        {...{
          isGuest: auth.guest,
          isAllowed: auth.guest,
          userRedirect: "/",
          guestRedirect: "/sign_in",
        }}
        exact={true}
        path="/forgot_password"
        component={ResetPassPage}
      />
    </Switch>
  );
};

export default Routes;
