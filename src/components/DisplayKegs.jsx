import React from 'react';
import Keg from './Keg';
import KegList from '../model/KegList.js';

function DisplayKegs(){
  return(
    <div>
      <style jsx>{`
        div{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1%;
            max-width:99vw;
          }
          `}
      </style>
      {KegList.map((Keg, index) =>
        <Keg name={keg.name}
          style={keg.style}
          origin={keg.origin}
          alcohol={keg.alcohol}
          key={index}/>
      )}
    </div>
  );
}

export default DisplayKegs;
