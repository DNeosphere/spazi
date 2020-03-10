import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/base.css";
import "./styles/flexbox.css";

import { Landing, Home } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/landing" component={Landing} />
          <Route path="/signin" />
          <Route path="/signup" />
      </Switch>

    </Router>
  );
}

export default App;
