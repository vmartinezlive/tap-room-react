import React from 'react';
import Image from './Image';
import logo from "../assets/images/eight-bridges.png";
import navbar from ".Navbar";



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
          top: 45vh; 
          left: 40vw; 
        }
			`}

      </style>
      <Image/>
      <h2> It's all about the beer!</h2>
      <img src={logo} alt="logo"></img>
  
    </div>
  );
}

export default Body;
