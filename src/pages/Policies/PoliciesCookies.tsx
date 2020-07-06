import React from "react";
import styles from "./Policies.module.css";

const PoliciesCookies: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.section}>Cookie Agreement</h1>
      <h3 className={styles.header}>Cookie management</h3>
      <p>
        Our Site can be used without cookies. You can disable the storage of
        cookies, restrict their creation to specific websites or set a
        notification about the sending of cookies in your browser. You can also
        delete cookies from your PC’s hard drive at any time (file: “cookies”).
        Please note: in this case, the display of pages and guidelines for using
        sites will be limited. Most browsers allow you to some extent control
        most cookies through browser settings. Not all visitors to our site use
        web browsers. For example, some users access DHL websites and
        applications from mobile devices. In this case, disabling cookies or
        changing web browser settings is likely to be impossible. Most internet
        browsers are initially set to automatically accept cookies. The user can
        change the settings so that the browser blocks the cookie or warns when
        files of this type will be sent to the device. There are several ways to
        manage cookies. Please refer to your browser instructions for more
        information on how to adjust or change your browser settings. If you
        disable the cookie, this may affect the operation of the User on the
        Internet. If the User uses various devices to view and access the Site
        (for example, a computer, smartphone, tablet, etc.), he must make sure
        that each browser on each device is configured in accordance with the
        preferences for working with cookies.
      </p>
    </div>
  );
};

export default PoliciesCookies;
