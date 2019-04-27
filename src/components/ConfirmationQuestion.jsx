import React from 'react';
import PropTypes from 'prop-types';


function ConfirmationQuestion(props){

  return(
    <div>
      <p>Do you want to create a new keg item?</p>
      <button onClick={props.onFormSubmission}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.PropTypes = {
  onFormSubmission: PropTypes.func
};

export default ConfirmationQuestion;
