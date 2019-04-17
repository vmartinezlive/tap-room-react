import React from 'react';
import DisplaySchedule from './DisplaySchedule';
import DisplayProduce from './DisplayProduce';
import Img from './Img';

function Body(){
  return (
    <div>
      <style jsx>{`
        div{
          // max-height:100%;
          display:block;
          position:relative;
          border: 1px solid red;
          overflow: hidden;
        }
			`}

      </style>

      <Img/>
      <DisplaySchedule/>
      <DisplayProduce/>
    </div>
  );
}

export default Body;
