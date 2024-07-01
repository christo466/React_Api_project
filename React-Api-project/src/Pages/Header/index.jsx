// import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Mind Hive</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dash">Dash</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
