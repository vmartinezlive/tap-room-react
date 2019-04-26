import React from 'react';

function Navbar(){

  return(
    <div>
      <style jsx> {`
        z-index: 1;
        color: white;
        position: absolute;
        top: 27vh;
        left: 22vw;
        font-wight: lighter
        margin-left: 10rem;
        color: white;
        text-transform: uppercase;
        display: row flex;
        justify-content: space-around;
        .form{
          margin-right: 5rem;
          margin-left: 7rem;
          font-family: Monaco;
        }
        .kegs{
          font-family: Monaco;
        }

      `}
      </style>
      <a className="kegs" href="#">Kegs</a>
      <a className="form"href="#">Form</a>
    </div>
  );
}

export default Navbar;
