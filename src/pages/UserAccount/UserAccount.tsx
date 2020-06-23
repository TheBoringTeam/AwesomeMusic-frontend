import React from "react";
import avatar from "./../../res/iddqd.jpg";
import styles from "./UserAccount.module.css";

const UserAccount: React.FC = () => {
  return (
    <div className={styles.content}>
      <section className={styles.left}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <h2>My username</h2>
        <p>Birthday date</p>
        <div>
          <span>Country</span>
          <span>Sex</span>
        </div>
      </section>
      <section className={styles.right}>
        <p>Тут какой-то контент</p>
      </section>
    </div>
  );
};

export default UserAccount;
