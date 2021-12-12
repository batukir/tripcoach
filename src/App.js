import './App.css';
import React from "react";
import Home from "./pages/Homepage"
import Map from "./pages/mapview"
import Review from "./pages/review"
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
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
