import React from 'react';
import background from '../assets/images/woodback.jpg';

function Img(){

  return(
    <div>
      <style jsx> {`
          width: 100%;
          height: 55vh;
          img{
            display: block;
            z-index: -2;
          }

			`}
      </style>
      <img src={background} alt="background"></img>
    </div>
  );
}

export default Img;
