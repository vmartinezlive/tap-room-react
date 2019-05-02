import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div>
      <style jsx> {`
        .links{
          display: flex;
          justify-content: space-between;
          position:absolute;
          z-index: 1;
          top: 94vh;
          left: 20vw;
          width: 60%;
          font-family: 'Patua One', cursive;
          font-size: 2rem;
          letter-spacing: 0.1em;
          color:#FDFFF2;
          // text-shadow: 1px 1px 2px red;
        }
         a {
           color: black;
           text-transform: uppercase;
         }

        `} </style>
      <div className="links">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <a>Home</a>
        </Link>
        <Link to="/displayKegs" style={{ textDecoration: 'none' }}>
          <a>Kegs</a>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <a>About</a>
        </Link>
        <Link to="/newKeg" style={{ textDecoration: 'none' }}>
          <a>Admin</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
