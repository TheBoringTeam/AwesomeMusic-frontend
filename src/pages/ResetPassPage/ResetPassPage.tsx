import React, { ChangeEvent, useState, FormEvent } from "react";

import styles from "./ResetPassPage.module.css";
import emailValidation from "../../services/validation/emailValidation";
import resetPassword from "../../services/api/resetPassword";

const ResetPassPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    if (emailValidation(email)) {
      resetPassword(email)
        .then((data) => {
          setMessage("Check your email for confarmation.");
        })
        .catch((err) =>
          err.status === 400
            ? setMessage("Wrong email")
            : setMessage("Sorry, something went wrong")
        );
    } else {
      setMessage("Please, input valid email");
    }
  };
  return (
    <div className={styles.content}>
      <h2 className={styles.header}>Reset password</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          className={styles.input}
          required
          onChange={handleChange}
          value={email}
          placeholder="Please enter your email..."
          name="email"
        />
        <button type="submit" className={styles.btn}>
          Continue
        </button>
      </form>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ResetPassPage;
