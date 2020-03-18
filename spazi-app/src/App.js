import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/base.css";
import "./styles/flexbox.css";

import { Landing, Home, SignIn, SignUp, SignUpSpazi, Users, Logout } from "./pages";
import {AuthComponent} from "./components";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/landing" component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signupspazi" component={SignUpSpazi} />
        <Route path="/logout" component={Logout} />
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
