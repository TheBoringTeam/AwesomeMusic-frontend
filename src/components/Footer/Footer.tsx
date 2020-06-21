import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <ul className={styles.list}>
            <li>
              <Link to="/agreements" className={styles.link}>
                Agreements
              </Link>
            </li>
            <li>
              <Link to="/policies-cookies" className={styles.link}>
                Cookies
              </Link>
            </li>
          </ul>
        </div>
        <p>
          BoringTeam (site), {year === 2020 ? 2020 : 2020 - year}. Please
          contact us on all issues.
        </p>
        <div className={styles.links}>
          <ul className={styles.list}>
            <li>
              <a
                href="mailto:boring.team.official@gmail.com"
                className={styles.icon}
              >
                <span className={styles.email}></span>
              </a>
            </li>
            <li>
              <span className={styles.github}></span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
