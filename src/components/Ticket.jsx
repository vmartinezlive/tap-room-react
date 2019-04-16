import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  let ticketStyles = {
    // backgroundColor: '#eee',
    fontFamily: 'sans-serif',
    paddingTop: '25x'
  };
  return (
    <div style={ticketStyles}>
      <style jsx>{`
        div {
          background-color: red;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
