import React from 'react';
import background from '../assets/images/woodback.jpg';

function Img(){

  return(
    <div>
      <style jsx> {`
          width: 100%;
          height: 80vh;
          img{
            display: block; 
            z-index: -2;
          }
          h2{
            position: absolute;
            left: 20vw;
            top: 10vh;
            z-index: 1;
            width: 60vw; 
            height: auto; 
            color: white;
            text-transform: uppercase; 
            font-size: 4rem; 
            text-align: center; 
            // -webkit-text-stroke: .22rem black;
            font-family: 'Vidaloka', serif;
            letter-spacing: 0.1em;
          }
			`}
      </style>
      <img src={background} alt="background"></img>
      <h2> It's all about the BEER!</h2>   
    </div>
  );
}

export default Img;


  