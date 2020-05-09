import React from "react";
import { Link } from "react-router-dom";

import styles from "./SignInPage.module.css";

const SignInPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <form className={styles.form}>
        <input
          type="e-mail"
          placeholder="Enter your email"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={styles.input}
        />
        <span className={styles.route}>
          <Link to="/forgot_password" className={styles.link}>
            Forgot password?
          </Link>
        </span>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
      <div className={styles["create-account"]}>
        <Link to="sign_up" className={styles.link}>
          Create account
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
