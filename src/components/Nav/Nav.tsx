import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  const [offset, setOffset] = useState<number>(80);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <header
      className={
        offset > 80 ? `${styles.header} ${styles["header-bc"]}` : styles.header
      }
    >
      <div className={styles.container}>
        <NavLink to="/" className={styles.link}>
          <span className={styles.logo}></span>
        </NavLink>
        <ul className={styles.nav}>
          <li className={styles["link-text"]}>
            <NavLink to="/help" className={styles.link}>
              Help
            </NavLink>
          </li>
          <li className={styles["link-text"]}>
            <NavLink to="/sign_up" className={styles.link}>
              Sign Up
            </NavLink>
          </li>
          <li className={styles["link-text"]}>
            <NavLink to="/sign_in" className={styles.link}>
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
