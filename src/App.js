import './App.css';
import React from "react";
import Home from "./pages/homepage"
import Map from "./pages/mapview"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mapview">
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
