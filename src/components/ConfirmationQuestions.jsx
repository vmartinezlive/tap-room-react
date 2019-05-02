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
        background-color: #FDFFF2;
      }
      button {
        background-color: #787E80;
        padding-right: 2em;
        padding-left: 2em;
      }
      img {
        width: 80vw;
        height: 80vh;
      }
      h2 {
        margin-top: 4rem;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: red;
        text-shadow: 1px 1px 2px black;
      }
    `}</style>
      <h2>Do you want to create a new keg item?</h2>
      <button onClick={props.onFormSubmission}>Yes</button>
      <br/>
      <br/>
      <img src={beer1}/>
    </div>

  );
  console.log('react');
}

ConfirmationQuestions.propTypes = {
  onFormSubmission: PropTypes.func
};

export default ConfirmationQuestions;
