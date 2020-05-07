import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useCookies } from "react-cookie";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage";
import HelpPage from "./pages/HelpPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

import styles from "./App.module.css";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner";

const App: React.FC = () => {
  const [banner, setBanner] = useState<boolean>(false);
  const [cookies, setCookies] = useCookies(["name"]);

  useEffect(() => {
    setBanner(!cookies.name);
  }, [cookies.name]);

  const handleCookies = () => {
    setCookies("name", "Cookie data replacement", {
      path: "/",
      expires: new Date(9999, 11, 11),
    });
  };
  return (
    <Router>
      {banner ? (
        <CookiesBanner agree={handleCookies} close={setBanner} />
      ) : null}
      <Nav />
      <div className={styles.container}>
        <div className={styles.content}>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/help" exact component={HelpPage} />
            <Route path="/sign_up" exact component={SignUpPage} />
            <Route path="/sign_in" exact component={SignInPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
