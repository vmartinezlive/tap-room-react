import React from 'react';
import beer from'../assets/images/beer.gif';

function Img(){


  return(
    <div>
      <style jsx> {`
          width: 100vw;
          height: auto;
			`}
      </style>
      <img src={beer} alt="beer"></img>
      

    </div>
  );
}

export default Img;


  