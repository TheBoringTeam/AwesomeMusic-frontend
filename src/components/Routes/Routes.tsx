import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import HelpPage from "../../pages/HelpPage";
import SignUpPage from "../../pages/SignUpPage";
import SignInPage from "../../pages/SignInPage";
import ResetPassPage from "../../pages/ResetPassPage";
import { UserRoute, GuestRoute } from "./ProtectedRoutes";
import { useUser } from "../../userContext";
import MyAccount from "../../pages/MyAccount";

const Routes: React.FC = () => {
  const { auth } = useUser()!;

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/help" exact component={HelpPage} />
      <GuestRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/",
        }}
        exact={true}
        path="/sign_up"
        component={SignUpPage}
      />
      <GuestRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/",
        }}
        exact={true}
        path="/sign_in"
        component={SignInPage}
      />
      <GuestRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/",
        }}
        exact={true}
        path="/forgot_password"
        component={ResetPassPage}
      />
      <UserRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/sign_in",
        }}
        exact={true}
        path="/my_account"
        component={MyAccount}
      />
    </Switch>
  );
};

export default Routes;
