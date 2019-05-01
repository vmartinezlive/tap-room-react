import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import kegList from '../model/KegData';
import Footer from './Footer';

function DisplayKegs(){

  return (
    <div>
      <style jsx>{`
          .grid{
            padding:10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1%;
            max-width:99vw;
          }

      `}
      </style>
      <div className="grid">
        {kegList.map((keg, index) =>
          <Keg name={keg.name}
            style={keg.style}
            origin={keg.origin}
            alcohol={keg.alcohol}
            key={index}/>
        )}
      </div>
      <Footer/>
    </div>
  );
}

DisplayKegs.propTypes = {
  kegList: PropTypes.array
};

export default DisplayKegs;
