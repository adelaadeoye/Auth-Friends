import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import Navbar from "./components/NavBar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route  exact path="/friend" component={FriendList} />
          <Route  path="/Addfriend" component={AddFriend} />
          <Route  component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
