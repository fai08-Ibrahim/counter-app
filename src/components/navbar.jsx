import React, { Component } from "react";

//we can simply use the shortcut 'sfc' to create a "Stateless Functional Component"
//that returns the same HTML that the NavBar class component, created by
//the shortcut 'cc' would've created. This practice is usually 
//prefered when building stateless simple functions.

const NavBar = ( {totalNumber} ) => { //sfc
  return (
          <nav className="navbar navbar-light bg-light">
          <span className="badge badge-pill badge-secondary"> {totalNumber} </span>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
      </nav>
    );
}

export default NavBar;
