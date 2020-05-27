import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface ProtectedRouteProps extends RouteProps {
  isGuest: boolean;
  isAllowed: boolean;
  userRedirect: string;
  guestRedirect: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath = "";
  if (!props.isGuest) {
    redirectPath = props.userRedirect;
  }
  if (props.isGuest && !props.isAllowed) {
    redirectPath = props.userRedirect;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default ProtectedRoute;
