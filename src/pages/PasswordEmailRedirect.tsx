import React, { ChangeEvent, useState, FormEvent } from "react";
import styles from "./ChangePasswordPage.module.css";
import passwordValidation from "../services/validation/passwordValidation";

const PasswordEmailRedirect: React.FC = () => {
  const [newPass, setNewPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "new":
        setNewPass(event.target.value);
        break;
      case "repeat":
        setRepeatPass(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    if (newPass === repeatPass && passwordValidation(newPass)) {
      console.log("Sucsess");
    } else {
      if (newPass !== repeatPass) {
        setMessage("Passwords must match");
      } else if (!passwordValidation(newPass)) {
        setMessage("Wrong format of password!");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="password"
          placeholder="New password"
          id="new"
          onChange={handleChange}
          value={newPass}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Repeat passsword"
          id="repeat"
          onChange={handleChange}
          value={repeatPass}
          required
        />
        <button type="submit" className={styles.btn}>
          Change Password
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default PasswordEmailRedirect;
