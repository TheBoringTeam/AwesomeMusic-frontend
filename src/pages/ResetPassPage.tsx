import React, { ChangeEvent, useState, FormEvent } from "react";

import styles from "./ResetPassPage.module.css";

const ResetPassPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Check your email!");
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
