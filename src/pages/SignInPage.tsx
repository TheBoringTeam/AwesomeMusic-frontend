import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import styles from "./SignInPage.module.css";
import getUser from "../services/api/handleSigninSubmit";
import { useUser } from "../userContext";
import Cookies from "js-cookie";
import authMe from "./../services/api/authMe";

const SignInPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { setAuth } = useUser()!;

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
        Cookies.set("token", data.token, { path: "/" });
        return authMe(data.token);
      })
      .then((data) => {
        setAuth({
          guest: false,
          username: data.username,
          email: data.email,
          loading: false,
        });
        history.push("/my_account");
      })
      .catch((err) => setError(err.message));
  }
  return (
    <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="login" className={styles.label}>
            Login:
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.input}
            id="login"
            value={login}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className={styles.input}
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
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
