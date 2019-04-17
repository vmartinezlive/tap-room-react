import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){



  return (
    <div>
      <style jsx>{`
        div {
          border: 1px dotted yellow;
          text-apgn: center;
          font-family: Allerta;


        }
        h3{
          text-align:center;
          color: #f61c6c;
          text-transform: uppercase;
          font-size: 125%;
        }
        .divStyles {
          display: flex;
          text-align:center;
          // background-color: red;
          justify-content: center;
          margin: 10px 30px 0 0;
          border: none;
        }

        `}
      </style>
      <h3>{props.month}</h3>
      <div className='divStyles'>
        <ul>
          {
            props.selection.map((produce,i)=>{
              return <p key={i}>{produce}</p>;
            })
          }
        </ul>
      </div>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array
};

export  default Produce;
