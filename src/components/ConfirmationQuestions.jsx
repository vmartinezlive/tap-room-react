import React from 'react';
import PropTypes from 'prop-types';
import beer1 from '../assets/images/beer1.gif';


function ConfirmationQuestions(props){

  return(
    <div>
      <style jsx>{`
      * {
        font-family: 'Patua One', cursive;
        text-align: center;
      }
      button {
        background-color: #FCFD46;

      }
    `}</style>
      <h2>Do you want to create a new keg item?</h2>
      <button onClick={props.onFormSubmission}>Yes</button>
      <img src={beer1}/>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onFormSubmission: PropTypes.func
};

export default ConfirmationQuestions;
