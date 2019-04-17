import React from 'react';
import DisplaySchedule from './DisplaySchedule';
import DisplayProduce from './DisplayProduce';
import Img from './Img';

function Body(){
  return (
    <div>
      <style jsx>{`


			`}

      </style>

      <Img/>
      <DisplaySchedule/>
      <DisplayProduce/>
    </div>
  );
}

export default Body;
