import React from 'react';
import Image from './Image';
import logo from '../assets/images/RedLogo.png';
import Navbar from './Navbar';
import displayKegs from './DisplayKegs';


function Body(props){
  return (
    <div>
      <style jsx>{`
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
          top: 5vh;
          transform-origin: bottom center;
          color: white;
        }
      .char1 { transform: rotate(300deg); }
      .char2 { transform: rotate(310deg); }
      .char3 { transform: rotate(320deg); }
      .char4 { transform: rotate(320deg); }
      .char5 { transform: rotate(330deg); }
      .char6 { transform: rotate(340deg); }
      .char7 { transform: rotate(350deg); }
      .char8 { transform: rotate(360deg); }
      .char9 { transform: rotate(10deg); }
      .char10 { transform: rotate(20deg); }
      .char11 { transform: rotate(30deg); }
      .char12{ transform: rotate(40deg); }
      .char13 { transform: rotate(50deg); }
      .char14 { transform: rotate(60deg); }
      .char15 { transform: rotate(70deg); }
      .char16 { transform: rotate(80Deg); }
      .char17 { transform: rotate(90deg); }

			`}

      </style>
      <Image/>
      <Navbar/>
      <DisplayKegs kegList={props.kegList} />
      <h2>
        <span className="char1">L</span>
        <span className="char2">I</span>
        <span className="char3">F</span>
        <span className="char4">E</span>
        <span className="char5"> </span>
        <span className="char6">I</span>
        <span className="char7">S</span>
        <span className="char8"> </span>
        <span className="char9">B</span>
        <span className="char10">R</span>
        <span className="char11">E</span>
        <span className="char12">W</span>
        <span className="char13">T</span>
        <span className="char14">I</span>
        <span className="char15">F</span>
        <span className="char16">U</span>
        <span className="char17">L</span>
      </h2>
      <img src={logo} alt="logo"></img>
    </div>
  );
}

export default Body;
