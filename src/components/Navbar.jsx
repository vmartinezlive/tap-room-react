import React from 'react';

function Navbar(){
  
  return(
    <div>
      <style jsx> {`
        z-index: 1; 
        color: white; 
        position: absolute;
        top: 5vh; 
        font-wight: lighter
        font-family: Vidaloka;
        margin-left: 10rem; 
        color: white; 
        text-transform: uppercase; 
        display: row flex;
        justify-content: space-around; 
        .kegs{
          margin-right: 5rem; 
          margin-left: 5rem; 
        }
      `}
      </style>  
          <a className="kegs" href="#">Kegs</a>
          <a className="form"href="#">Form</a>  
    </div>
  );
};

export default Navbar;