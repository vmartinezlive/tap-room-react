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
          border: 1px dotted yellow;
          text-align: center;
          font-family: Allerta;
        }
        h1{
          font-family: 'Monoton', cursive;
          color: gold;
        }

      `}</style>
      <h3 style={locationStyles}>{props.day}</h3>
      <h4>{props.location}</h4>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

Ticket.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default Ticket;
