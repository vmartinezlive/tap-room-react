import React from 'react';


function Header(){
  return (
    <div>
      <style jsx>{`
      background-color: black;
      color: white;
      text-align: center;
      .atags {
        display: flex;
        justify-content: space-around;
        margin-right: 8rem;
        margin-left: 8rem;

        width: 80%;
        height: 3rem;
        padding-top: 1rem;
        padding-left: 2rem;
        padding-reight:
      }



      `}
      </style>
      <div className="atags">
        <a href="#">Call Us Today! 925-961-9160 |</a>
        <a href="#">info@8bridgesbrewing.com</a>
      </div>
    </div>
  );
}

export default Header;
