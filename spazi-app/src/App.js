import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/base.css";
import "./styles/flexbox.css";

import { Landing, Home, SignIn, SignUp, SignUpSpazi, Users } from "./pages";
import AuthComponent from "./components/AuthComponent/AuthComponent";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/landing" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signupspazi" component={SignUpSpazi} />
        <AuthComponent>
          <Route path="/users" component={Users} />
          <Route path="/find-spazis" />
          <Route path="/history" />
          <Route path="/profile" />
        </AuthComponent>

      </Switch>
    </Router>
  );
}

export default App;
