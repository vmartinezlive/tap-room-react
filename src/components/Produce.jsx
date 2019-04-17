import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){

  return (
    <div>
      <style jsx>{`
        div {
          border: 1px dotted yellow;
          text-align: center;
          font-family: Allerta;
        }
        h3{
          color: #f61c6c;
          text-transform: uppercase;
        }
        li {
          text-decorator: none;
          list-style-type: none;
        

        }



        `}
      </style>
      <h3>{props.month}</h3>
      <ul>
      {
       props.selection.map((produce,i)=>{
       return <li key={i}>{produce}</li>
       })
     }
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export  default Produce;
