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
        margin-right: 5rem;
        margin-left: 3rem;

        width: 80%;
        height: 3rem;
        padding-top: 1rem;
        padding-left: 2rem;
        padding-reight:
      }
      // @media only screen and (min-width: 768px) {
      //   .atags{
      //     display: none;
      //   }
      //
      // }



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
