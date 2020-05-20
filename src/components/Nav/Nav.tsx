import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./../../res/iddqd.jpg";

import styles from "./Nav.module.css";
import { useUser } from "../../userContext";

const NavWithUser: React.FC = () => {
  const { auth, setAuth } = useUser()!;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          The Boring Company
        </NavLink>
        <nav>
          <ul className={styles.list}>
            <li className={styles.route}>
              <img src={avatar} alt="user avatar" className={styles.avatar} />
            </li>
            <li className={styles.route}>I`m the Doom Guy, duh</li>
          </ul>
          <button onClick={() => setAuth(false)}>Log out</button>
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
          The Boring Company
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
    <React.Fragment>{auth ? <NavWithUser /> : <NavWithGuest />}</React.Fragment>
  );
};

export default Nav;
