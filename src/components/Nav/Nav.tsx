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
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.username}>{auth.username}</li>
            <li className={styles.route}>
              <Link to="/my-account">
                <img src={avatar} alt="user avatar" className={styles.avatar} />
              </Link>
            </li>
            <li>
              <Link to="change-password" className={styles["settings-route"]}>
                <span className={styles.settings}></span>
              </Link>
            </li>
          </ul>
          <button onClick={handleLogOut} className={styles.btn}>
            Log out
          </button>
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
              <NavLink to="/sign-in" className={styles.link}>
                Sign In
              </NavLink>
            </li>
            <li className={styles.route}>
              <NavLink to="/sign-up" className={styles.link}>
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
