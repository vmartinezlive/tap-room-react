import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div>
      <Link to="/Body">Home</Link> | <Link to="/newKeg">Create New Keg</Link>
    </div>
  );
}

export default Navbar;

// z-index: 1;
// color: white;
// position: absolute;
// top: 27vh;
// left: 22vw;
// font-wight: lighter
// margin-left: 10rem;
// color: white;
// text-transform: uppercase;
// display: row flex;
// justify-content: space-around;
// .form{
//   margin-right: 5rem;
//   margin-left: 7rem;
//   font-family: Monaco;
// }
// .kegs{
//   font-family: Monaco;
// }