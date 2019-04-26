import React from 'react';

function NewKegForm(){
  return(
    <div>
      <form>
        <h2>Name of Beer:</h2>
        <input 
          type='text'
          id='name'
        />
        <h2>Style of Beer:</h2>
        <input 
          type='text'
          id='style'
        />
        <h2>Origin:</h2>
        <input 
          type='text'
          id='origin'
        />  
        <h2>Alcohol Content:</h2>
        <input 
          type='text'
          id='alcohol'
        />                
      </form>
    </div>
  );
}

export default NewKegForm; 