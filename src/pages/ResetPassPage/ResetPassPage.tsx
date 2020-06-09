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
          if (data.status !== 200) {
            throw Error(data.message);
          } else {
            setMessage("please check your email");
          }
        })
        .catch((err) => setMessage(err.message));
    } else {
      setMessage("Please, input valid email");
    }
  };
  return (
    <div>
      <h2>Reset password</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="e-mail"
          className={styles.input}
          required
          onChange={handleChange}
          value={email}
          placeholder="Please enter your email..."
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
