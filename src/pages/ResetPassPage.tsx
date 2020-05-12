import React from "react";

import styles from "./SignInPage.module.css";

const ResetPassPage: React.FC = () => {
  return (
    <div>
      <form>
        <h2>Reset password</h2>
        <input type="e-mail" className={styles.input} />
        <button type="submit" className={styles.btn}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default ResetPassPage;
