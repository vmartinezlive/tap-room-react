import React from 'react';
import Image from './Image';



function Body(){
  return (
    <div>
      <style jsx>{`
        h2{
          position: absolute;
          left: 50vw;
          top: 50vh;
          z-index: -2;
          width: 20vw; 
          height: auto; 
          border: 1px solid white;
          color: white;
        }
        img{
          position:absolute;
          z-index: 1; 
        }
			`}

      </style>
      <Image/>
      <h2> It's all about the beer!</h2>
      <img src="./assets/images/eight-bridges.png" alt="logo"></img>
  
      
  
    </div>
  );
}

export default Body;
