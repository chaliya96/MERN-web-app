import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand">Senz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"></a>
      </li>
      
      
    </ul>
    <ul>
    <li className="nav-item">
        <a className="nav-link" href="/register">Register</a><li className="nav-item">
      
      </li>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Log in</a>
      </li>

    </ul>
  </div>
</nav>
      </div>
    );
  }
}

export default Navbar;

