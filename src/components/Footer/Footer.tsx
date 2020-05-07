import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <ul className={styles.list}>
            <li>Legal</li>
            <li>Cookies</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <p>
          BoringTeam (site), {year === 2020 ? 2020 : 2020 - year}. Please
          contact us on all issues.
        </p>
        <div className={styles.social}>
          <span>Link to Github</span>
          <span>Link to G-mail</span>
          <span>Link to Twitter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
