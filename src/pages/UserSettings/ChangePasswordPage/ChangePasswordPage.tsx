import React, { ChangeEvent, useState, FormEvent } from "react";
import Cookies from "js-cookie";
import changePassword from "../../../services/api/changePassword";
import passwordValidation from "../../../services/validation/passwordValidation";
import styles from "./ChangePasswordPage.module.css";

const ChangePasswordPage: React.FC = () => {
  const [oldPass, setOldPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [repeatPass, setRepeatPass] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "old":
        setOldPass(event.target.value);
        break;
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
    if (
      newPass === repeatPass &&
      passwordValidation(newPass) &&
      oldPass !== newPass
    ) {
      changePassword(oldPass, newPass, Cookies.get("token")!)
        .then((data) => setMessage("Password has been changed"))
        .catch((err) =>
          setMessage(err.status === 400 ? err.message : "Something went wrong")
        );
    } else {
      if (oldPass === newPass) {
        setMessage("New password must be different from old");
      } else if (newPass !== repeatPass) {
        setMessage("Passwords must match");
      } else if (!passwordValidation(newPass)) {
        setMessage("Wrong format of password!");
      }
    }
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="password"
          placeholder="Old password"
          id="old"
          onChange={handleChange}
          value={oldPass}
          required
        />
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
        <p className={styles.message}>{message}</p>
        <button type="submit" className={styles.btn}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
