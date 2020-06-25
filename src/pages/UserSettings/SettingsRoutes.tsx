import React from "react";
import ChangePasswordPage from "./ChangePasswordPage/ChangePasswordPage";
import ManageUserInfo from "./ManageUserInfo";

interface IProps {
  url: string;
}

const SettingsRoutes: React.FC<IProps> = ({ url }) => {
  switch (url) {
    case "?=change-password":
      return <ChangePasswordPage />;
    case "?=manage-info":
      return <ManageUserInfo />;
    default:
      return null;
  }
};

export default SettingsRoutes;
