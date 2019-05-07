import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';




function DisplayKegs(props){

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
      {props.kegList.map((keg, index)=>
        <Keg name={keg.name}
          style={keg.style}
          origin={keg.origin}
          alcohol={keg.alcohol}
          id={keg.id}
          key={index}
          handleDeleteKeg={props.handleDeleteKeg}/>
      )}

      </div>
    );
  }

DisplayKegs.propTypes = {
  kegList: PropTypes.array,
  handleDeleteKeg: PropTypes.func

};

export default DisplayKegs;
