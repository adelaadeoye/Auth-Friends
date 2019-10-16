import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import Navbar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          
          <PrivateRoute  exact path="/friendPage" component={FriendList} />
          <Route  exact path="/login" component={Login} />
          <Route  component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
