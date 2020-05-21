import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.css";
import emailValidation from "../services/validation/emailValidation";
import usernameValidation from "../services/validation/usernameValidation";
import passwordValidation from "../services/validation/passwordValidation";
import handleSignUp from "../services/api/HandleSignUp";

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passConfirm, setPassConfirm] = useState<string>("");
  const [agreement, setAgreement] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [banner, setBanner] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "username":
        setUsername(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "pass1":
        setPassword(event.target.value);
        break;
      case "pass2":
        setPassConfirm(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      usernameValidation(username) &&
      passwordValidation(password) &&
      emailValidation(email) &&
      password === passConfirm &&
      agreement
    ) {
      handleSignUp(username, password, email)
        .then((data) => {
          setBanner(true);
        })
        .catch((err) => setError(err));
      setBanner(true);
      console.log("work");
    } else {
      setError("Check Fields");
      console.log("fail");
    }
  };
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>
        {banner ? "One more step..." : "Join music community!"}
      </h1>
      <form
        className={banner ? styles.hidden : styles.form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Please enter your username..."
          className={styles.input}
          value={username}
          onChange={handleChange}
          id="username"
        />
        <input
          type="e-mail"
          placeholder="Please enter your email..."
          className={styles.input}
          value={email}
          onChange={handleChange}
          id="email"
        />
        <input
          type="password"
          placeholder="Please enter your password..."
          className={styles.input}
          value={password}
          onChange={handleChange}
          id="pass1"
        />
        <input
          type="passsword"
          placeholder="Please repeat your password..."
          className={styles.input}
          value={passConfirm}
          onChange={handleChange}
          id="pass2"
        />
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="agreement"
            required
            onClick={() => setAgreement((prev) => !prev)}
          />
          <label htmlFor="agreement">I am agree to The terms</label>
        </div>
        <p>{error}</p>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
      {banner ? <Banner /> : null}
    </div>
  );
};

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <p>
        Registration completed. Please, visit your e-mail for account
        conformation.{" "}
        <Link to="/sign_in" className={styles.link}>
          Go to Sign in page
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
