import React from "react";
import styles from "./SignUpPage.module.css";

const SignUpPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Join music community!</h1>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Please enter your username..."
          className={styles.input}
        />
        <input
          type="e-mail"
          placeholder="Please enter your email..."
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Please enter your password..."
          className={styles.input}
        />
        <input
          type="passsword"
          placeholder="Please repeat your password..."
          className={styles.input}
        />
        <div className={styles.checkbox}>
          <input type="checkbox" id="agreement" required />
          <label htmlFor="agreement">I am agree to The terms</label>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
