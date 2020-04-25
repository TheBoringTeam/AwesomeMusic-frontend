import React from "react";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>Privacy</span>
        <span>Contacts</span>
        <span>The Boring Team</span>
      </div>
    </footer>
  );
};

export default Footer;
