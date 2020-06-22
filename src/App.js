import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component import
import HeaderBar from "./components/HeaderBar";
// Page import
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
