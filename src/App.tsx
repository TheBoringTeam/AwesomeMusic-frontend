import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage";
import HelpPage from "./pages/HelpPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/help" exact component={HelpPage} />
          <Route path="/sign_up" exact component={SignUpPage} />
          <Route path="/sign_in" exact component={SignInPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
