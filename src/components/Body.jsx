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
			`}

      </style>
      <Image/>
      <h2> It's all about the BEER!</h2>
  
    </div>
  );
}

export default Body;
