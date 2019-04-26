import React from 'react';
import Image from './Image';
import logo from '../assets/images/RedLogo.png';
import Navbar from './Navbar';
import DisplayKegs from './DisplayKegs';

function Body(){
  return (
    <div>
      <style jsx>{`
        // h2{
        //   position: absolute;
        //   left: 50vw;
        //   top: 65vh;
        //   z-index: -2;
        //   width: 20vw;
        //   height: auto;
        //   border: 1px solid white;
        //   color: white;
        // }
        img{
          position:absolute;
          z-index: 1;
          top: 15vh;
          left: 18vw;
          width: 60%;
        }
        h2 span {
          font: 26px Monaco, MonoSpace;
          height: 200px;
          position: absolute;
          width: 20px;
          left: 47vw;
          top: 15vh;
          transform-origin: bottom center;
          color: white;
        }
      .char1 { transform: rotate(325deg); }
      .char2 { transform: rotate(335deg); }
      .char3 { transform: rotate(345deg); }
      .char4 { transform: rotate(355deg); }
      .char5 { transform: rotate(5deg); }
      .char6 { transform: rotate(15deg); }
      .char7 { transform: rotate(25deg); }
      .char8 { transform: rotate(35deg); }

			`}

      </style>
      <Image/>
      <Navbar/>
      <DisplayKegs/>
      <h2>
        <span className="char1">B</span>
        <span className="char2">E</span>
        <span className="char3">E</span>
        <span className="char4">R</span>
        <span className="char5">T</span>
        <span className="char6">I</span>
        <span className="char7">M</span>
        <span className="char8">E</span>
      </h2>
      <img src={logo} alt="logo"></img>

    </div>
  );
}

export default Body;
