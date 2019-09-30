import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (
      <>
      <ul id="slide-out" class="sidenav ">
      <li><Link to={"/mycont"}> My Contribution </Link></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>

<nav>
    <div className="nav-wrapper indigo white-text">
    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
      <a href="#" className="brand-logo center">Helping Library</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to={"/donate"}> Donate </Link></li>
        <li><a href="badges.html">Deposit</a></li>
        <li><a href="collapsible.html">user</a></li>
      </ul>
    </div>
  </nav>
  </>
    );
};

export default Navbar;