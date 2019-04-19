import React from 'react';
import beer from '../assets/images/beer.gif';
import logo from '../assets/images/eight-bridges.png';


function Img(){


  return(
    <div>
      <style jsx> {`
          width: 100%;
          height: 60vh;
          img{
            z-index: -2;
          }
          h2{
            position: absolute;
            left: 20vw;
            top: 20vh;
            z-index: 1;
            width: 60vw; 
            height: auto; 
            color: gold;
            text-transform: uppercase; 
            font-size: 5rem; 
            text-align: center; 
            -webkit-text-stroke: 1px black;
          }
    
			`}
      </style>
        <img src={beer} alt="beer"></img>
        <h2> It's all about the BEER!</h2>    
    </div>
  );
}

export default Img;


  