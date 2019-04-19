import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  
  let kegdisplaystyle = {
    textTransform: 'uppercase'
  };
  return(
    <div>
      <style jsx>{`
        div {
         border: 1px dotted black;
         text-align: center;
        }  
      `}
      </style>
      <h3 style={kegdisplaystyle}>{props.name}</h3>
      <h4>{props.style}</h4>
      <h4>{props.origin}</h4>
      <p>{props.alcohol}</p>      
    </div>  
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  origin: PropTypes.string,
  alcohol: PropTypes.string,  
};

export default Keg; 

