import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner";
import Cookies from "js-cookie";
import { useUser } from "./userContext";
import Routes from "./components/Routes/Routes";
import checkUser from "./services/api/checkUser";
import { UserProvider } from "./userContext";

type LoaderProps = {
  loadApp(param: boolean): void;
};

const Content: React.FC = () => {
  const [banner, setBanner] = useState<boolean>(true);
  const { setAuth } = useUser()!;

  useEffect(() => {
    if (Cookies.get("agreement")) {
      setBanner(false);
    }
  }, []);

  useEffect(() => {
    checkUser(setAuth);
  }, [setAuth]);

  const handleCookies = () => {
    Cookies.set("agreement", "i.am.agree", {
      expires: 365,
    });
    setBanner(false);
  };

  return (
    <Router>
      {banner ? (
        <CookiesBanner agree={handleCookies} close={setBanner} />
      ) : null}
      <Nav />
      <div className={styles.container}>
        <div className={styles.content}>
          <Routes />
        </div>
      </div>
      <Footer />
    </Router>
  );
};

const Loader: React.FC = () => <div className={styles.loader}></div>;

const App: React.FC = () => {
  const { auth, setAuth } = useUser()!;

  useEffect(() => {
    checkUser(setAuth);
  }, [setAuth]);

  return <UserProvider>{auth.loading ? <Loader /> : <Content />}</UserProvider>;
};
export default App;
