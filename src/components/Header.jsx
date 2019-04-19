import React from 'react';
// import logo from '../assets/images/eight-bridges.gif';

function Header(){
  return (
    <div>
    
      <style jsx>{`
        height: 10vh;
          border: 1px solid red; 
          img {
          display: block; 
          margin-left: auto;
          margin-right: auto 
          }
			`}
      </style>
      <img src={logo} alt="logo">
      <Links/>
    
     </div> 
   );
}

export default Header;

