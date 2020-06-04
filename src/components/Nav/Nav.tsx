import React from "react";
import { NavLink, Link } from "react-router-dom";
import avatar from "./../../res/iddqd.jpg";

import styles from "./Nav.module.css";
import { useUser } from "../../userContext";
import Cookies from "js-cookie";

const NavWithUser: React.FC = () => {
  const { auth, setAuth } = useUser()!;

  const handleLogOut = () => {
    setAuth({ guest: true, loading: false });
    Cookies.remove("token");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Awesome Music
        </NavLink>
        <nav>
          <ul className={styles.list}>
            <li className={styles.route}>
              <Link to="/my_account">
                <img src={avatar} alt="user avatar" className={styles.avatar} />
              </Link>
            </li>
            <li className={styles.route}>{auth.username}</li>
            <li>
              <Link to="change_password">Settings</Link>
            </li>
          </ul>
          <button onClick={handleLogOut}>Log out</button>
        </nav>
      </div>
    </header>
  );
};

const NavWithGuest: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Awesome Music
        </NavLink>
        <nav>
          <ul className={styles.list}>
            <li className={styles.route}>
              <NavLink to="/sign_in" className={styles.link}>
                Sign In
              </NavLink>
            </li>
            <li className={styles.route}>
              <NavLink to="/sign_up" className={styles.link}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Nav: React.FC = () => {
  const { auth } = useUser()!;
  return (
    <React.Fragment>
      {auth.guest ? <NavWithGuest /> : <NavWithUser />}
    </React.Fragment>
  );
};

export default Nav;
