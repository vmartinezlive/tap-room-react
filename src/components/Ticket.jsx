import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){

  let locationStyles = {
    textTransform: 'uppercase'
  };
  return (
    <div>
      <style jsx>{`
        div {
          background-color: red;
          font-family: Allerta;
        }
        h1{
          font-family: 'Monoton', cursive;
          color: gold;
        }

      `}</style>
      <h3 style={locationStyles}>{props.location}</h3>
      <h4>{props.address}</h4>
      <p>{props.hours}</p>
    </div>
  );
}

Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hours: PropTypes.string
};

export default Ticket;
