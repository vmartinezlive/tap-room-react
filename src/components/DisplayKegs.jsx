import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import kegList from '../model/KegData';



function DisplayKegs(props){

 // var keys = Object.keys();
  return (
    <div className="grid">
      <style jsx>{`
          .grid{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1%;
            max-width:99vw;
            margin-bottom: 1rem;
          }

      `}
      </style>

      {Object.keys(props.kegList).map(function(kegId, index){
        let keg = props.keglist[kegID];
        return <Keg name={keg.name}
        style={keg.style}
        origin={keg.origin}
        alcohol={keg.alcohol}
        id={keg.id}
        key={index} />;
      }
    )}
      </div>
    );
}

DisplayKegs.propTypes = {
  kegList: PropTypes.object
};

export default DisplayKegs;
