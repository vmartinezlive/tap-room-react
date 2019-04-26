import React from 'react';
import PropTypes from 'prop-types';


function ConfirmationQuestion(){
  
  
  return(
    <div>
      <p>Do you want to create a new keg item?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.PropTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestion;

