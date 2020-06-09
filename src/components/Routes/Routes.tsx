import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import PoliciesCookies from "../../pages/Policies/PoliciesCookies";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import ResetPassPage from "../../pages/ResetPassPage/ResetPassPage";
import { UserRoute, GuestRoute } from "./ProtectedRoutes";
import { useUser } from "../../userContext";
import MyAccount from "../../pages/MyAccount";
import ChangePasswordPage from "../../pages/ChangePasswordPage/ChangePasswordPage";
import PasswordEmailRedirect from "../../pages/PasswordEmailRedirect";
import RegistrationConfirmed from "../../pages/RegistrationConfirmed";

const Routes: React.FC = () => {
  const { auth } = useUser()!;

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/policies-cookies" exact component={PoliciesCookies} />
      <Route path="/registration-confirmed" component={RegistrationConfirmed} />
      <GuestRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/",
        }}
        exact={true}
        path="/sign-up"
        component={SignUpPage}
      />
      <GuestRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/",
        }}
        exact={true}
        path="/sign-in"
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
          redirectPath: "/sign-in",
        }}
        exact={true}
        path="/my-account"
        component={MyAccount}
      />
      <UserRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/sign-in",
        }}
        exact={true}
        path="/change-password"
        component={ChangePasswordPage}
      />
      <GuestRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/sign-in",
        }}
        exact={false}
        path="/password-recovery"
        component={PasswordEmailRedirect}
      />
    </Switch>
  );
};

export default Routes;
