import React from "react";
import { NavLink, RouteComponentProps } from "react-router-dom";
import styles from "./UserSettings.module.css";
import SettingsRoutes from "./SettingsRoutes";

const UserSettings: React.FC<RouteComponentProps> = ({ match, location }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.board}>
        <ul className={styles.list}>
          <NavLink
            to="/user-settings?=change-password"
            className={styles.link}
            activeClassName={styles.actionItem}
          >
            <li className={styles.route}>Change Password</li>
          </NavLink>
          <NavLink
            to="/user-settings?=manage-info"
            className={styles.link}
            activeClassName={styles.actionItem}
          >
            <li className={styles.route}>Manage Account Info</li>
          </NavLink>
        </ul>
      </nav>
      <div className={styles.content}>
        <SettingsRoutes url={location.search} />
      </div>
    </div>
  );
};

export default UserSettings;
