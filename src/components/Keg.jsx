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
         border: 2px solid black;
         text-align: center;
         background-color:#E5E1DA;
         color: #F8F8F4;
        }
        h3 {
          font-family: 'Patua One', cursive;
          letter-spacing: 0.2em;
          color: red;
        }
        h4{
          color: #403F3D;
        }

      `}
      </style>
      <h3 style={kegdisplaystyle}>{props.name}</h3>
      <h4>{props.style}</h4>
      <h4>{props.origin}</h4>
      <h4>{props.alcohol}</h4>
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
