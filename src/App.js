import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserList />
      </div>
    );
  }
}

export default App;
