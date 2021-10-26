import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthorizationPage from "./auth";
import Profile from "./profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AuthorizationPage} />
        <Route exact path="/profile" component={()=><Profile />} />
      </Switch>
    </Router>
  );
}

export default App;
