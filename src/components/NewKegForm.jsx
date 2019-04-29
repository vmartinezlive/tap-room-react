import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

//change this form to a class base since we are storing local data 
function NewKegForm(props){
  let _name = null;
  let _style = null;
  let _origin = null;
  let _alcohol = null;

  function handleNewKegFormSubmission(event)  {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, style: _style.value, origin: _origin.val, alcohol: _alcohol.val, id: v4()});

    _name.val ='';
    _style.val = '';
    _origin.val = '';
    _alcohol.val = '';
  }
  return(
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <h2>Name of Beer:</h2>
        <input
          type='text'
          id='name'
          ref={(input) => {_name = input;}}
        />
        <h2>Style of Beer:</h2>
        <input
          type='text'
          id='style'
          ref={(input) => {_style = input;}}
        />
        <h2>Origin:</h2>
        <input
          type='text'
          id='origin'
          ref={(input) => {_origin = input;}}
        />
        <h2>Alcohol Content:</h2>
        <input
          type='text'
          id='alcohol'
          ref={(input) => {_alcohol = input;}}
        />
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
