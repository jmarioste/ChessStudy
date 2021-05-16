import "./App.css";

import React, { useRef, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
import { Header } from "./components";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const history = useHistory();
  if (!loggedIn) {
    history.push("/login");
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage setLoggedIn={setLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}
