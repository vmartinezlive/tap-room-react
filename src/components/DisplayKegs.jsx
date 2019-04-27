import React from 'react';
import Keg from './Keg';
import KegList from '../model/KegList.js';
import PropTypes from 'prop-types';

function DisplayKegs(props){
  return(
    <div>
      <style jsx>{`
        div{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1%;
            max-width:99vw;
          }
          `}
      </style>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          style={keg.style}
          origin={keg.origin}
          alcohol={keg.alcohol}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default DisplayKegs;
