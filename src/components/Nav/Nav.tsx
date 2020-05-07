import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav: React.FC = () => {
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

export default Nav;
