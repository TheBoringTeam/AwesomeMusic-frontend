import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import styles from "./SignInPage.module.css";
import getUser from "../functions/handleSigninSubmit";
import { useUser } from "../userContext";

const SignInPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { auth, setAuth } = useUser()!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "login":
        setLogin(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getUser(login, password)
      .then((data) => {
        setAuth(true);
        history.push("/succsess");
      })
      .catch((err) => setError(err.message));
  }
  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          className={styles.input}
          id="login"
          value={login}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={styles.input}
          id="password"
          value={password}
          onChange={handleChange}
          required
        />
        <p className={styles.warning}>{error}</p>
        <span className={styles.route}>
          <Link to="/forgot_password" className={styles.link}>
            Forgot password?
          </Link>
        </span>
        <button type="submit" className={styles.btn}>
          Sign in
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
