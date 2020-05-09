import React from "react";

import styles from "./CookiesBanner.module.css";

type Props = {
  agree(): void;
  close(banner: boolean): void;
};

const CookiesBanner: React.FC<Props> = (props) => {
  const handleAgree = () => {
    props.agree();
  };

  const handleClose = () => {
    props.close(false);
  };
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.message}>
          This app use cookies:{" "}
          <span className={styles.link}>Read more...</span>
        </p>
        <button onClick={handleAgree} className={styles.btn}>
          I agree
        </button>
        <button className={styles.btn} onClick={handleClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;
