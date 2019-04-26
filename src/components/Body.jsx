import React from 'react';
import Image from './Image';
import logo from '../assets/images/RedLogo.png';
import Navbar from './Navbar';
import DisplayKegs from './DisplayKegs';

function Body(){
  return (
    <div>
      <style jsx>{`
        h2{
          position: absolute;
          left: 50vw;
          top: 65vh;
          z-index: -2;
          width: 20vw;
          height: auto;
          border: 1px solid white;
          color: white;
        }
        img{
          position:absolute;
          z-index: 1;
          top: 6vh;
          left: 13vw;
          width: 70%;
        }
			`}

      </style>
      <Image/>
      <Navbar/>
      <DisplayKegs/>
      <h2>
        <span className="char1">B</span>
        <span className="char1">E</span>
        <span className="char1">E</span>
        <span className="char1">R</span>
        <span className="char1">G</span>
        <span className="char1">A</span>
        <span className="char1">S</span>
        <span className="char1">M</span>
      </h2>
      <img src={logo} alt="logo"></img>

    </div>
  );
}

export default Body;
