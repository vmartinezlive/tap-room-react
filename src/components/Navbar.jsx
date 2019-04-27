import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <a>Home</a>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <a>About</a>
      </Link>
      <Link to="/newKegForm" style={{ textDecoration: 'none' }}>
        <a>Admin</a>
      </Link>
    </div>
  );
}

export default Navbar;
