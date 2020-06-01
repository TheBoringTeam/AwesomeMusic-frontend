import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface ProtectedRouteProps extends RouteProps {
  isGuest: boolean;
  redirectPath: string;
}

export const GuestRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath = "";
  if (!props.isGuest) {
    redirectPath = props.redirectPath;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export const UserRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath = "";
  if (props.isGuest) {
    redirectPath = props.redirectPath;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};
