import React, { useState } from "react";
import Cookies from "js-cookie";
import updateUser from "../../services/api/updateUser";
import styles from "./ManageUserInfo.module.css";

export interface IUser {
  name: string;
  biography: string;
  birthday: string;
  deathday: string;
  gender: string;
  education: string;
  language_code: string;
  country_code: string;
}

const ManageUserInfo: React.FC = () => {
  const defaultState: IUser = {
    name: "",
    biography: "",
    birthday: "",
    deathday: "",
    gender: "",
    education: "",
    language_code: "",
    country_code: "",
  };
  const [userInfo, setInfo] = useState<IUser>(defaultState);
  const [message, setMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInfo((prev) => ({ ...prev, gender: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    updateUser(userInfo, Cookies.get("token")!)
      .then((data) => setMessage("Information has been changed"))
      .catch((err) => setMessage(err.message));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Change your personal info</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>First name</label>
          <input
            type="text"
            placeholder="name"
            value={userInfo.name}
            name="name"
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            placeholder="surname"
            value={userInfo.name}
            name="surname"
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <label>Birthday</label>
          <input
            type="date"
            value={userInfo.birthday}
            name="birthday"
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <label>Death day</label>
          <input
            type="date"
            value={userInfo.deathday}
            name="deathday"
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            onChange={handleRadioChange}
            className={styles.input}
            checked={userInfo.gender === "male"}
            value="male"
            id="gender1"
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            onChange={handleRadioChange}
            className={styles.input}
            checked={userInfo.gender === "female"}
            value="female"
            id="gender2"
          />
        </div>
        <input
          type="text"
          placeholder="education"
          value={userInfo.education}
          name="education"
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="language"
          value={userInfo.language_code}
          name="language_code"
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="country"
          value={userInfo.country_code}
          name="country_code"
          onChange={handleInputChange}
          className={styles.input}
        />
        <div>
          <label>About yourself</label>
          <textarea
            placeholder="Biography"
            value={userInfo.biography}
            name="biography"
            onChange={handleTextChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.btn}>
          SUBMIT
        </button>
      </form>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ManageUserInfo;

/* 
"name": "Vladislove_228",
  "biography": "Example biography looks like this bla bla bla.",
  "birthday": "05/06/2020",
  "deathday": "05/06/2020",
  "gender": "FEMALE",
  "education": "BACHELOR",
  "language_code": "RU",
  "country_code": "RU" */
