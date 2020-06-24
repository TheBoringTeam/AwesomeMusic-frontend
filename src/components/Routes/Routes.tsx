import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import PoliciesCookies from "../../pages/Policies/PoliciesCookies";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import ResetPassPage from "../../pages/ResetPassPage/ResetPassPage";
import { UserRoute, GuestRoute } from "./ProtectedRoutes";
import { useUser } from "../../userContext";
import UserAccount from "../../pages/UserAccount/UserAccount";
import PasswordEmailRedirect from "../../pages/PasswordEmailRedirect";
import RegistrationConfirmed from "../../pages/RegistrationConfirmed";
import Agreements from "../../pages/Policies/Agreements";
import MailRedirectFail from "../../pages/MailRedirectFail";
import UserSettings from "../../pages/UserSettings/UserSettings";

const Routes: React.FC = () => {
  const { auth } = useUser()!;

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/policies-cookies" exact component={PoliciesCookies} />
      <Route path="/registration-confirmed" component={RegistrationConfirmed} />
      <Route path="/mail-failure" component={MailRedirectFail} />
      <Route path="/agreements" exact component={Agreements} />
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
        path="/forgot-password"
        component={ResetPassPage}
      />
      <UserRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/sign-in",
        }}
        exact={true}
        path="/my-account"
        component={UserAccount}
      />
      <UserRoute
        {...{
          isGuest: auth.guest,
          redirectPath: "/sign-in",
        }}
        exact={false}
        path="/user-settings"
        component={UserSettings}
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
