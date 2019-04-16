import React from 'react';
import Links from './Links';
import Icon from './Icon';
// import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row wrap;
          // justify-content: center;
          border: 1px solid red;
          background-color
        }
        h1{
          width: 100%;
          font:100px/.5em monoton;
          color: #FCFD46;
          text-transform:uppercase;
        }
        .nightMarket {
          display: flex;
          flex-direction: column;
        }
     `}</style>
      <h1>Portland</h1>
      <div className="nightMarket">
        <h4>Night</h4>
        <h4>Market</h4>
      </div>
      <Links/>
      <Icon/>

    </div>
  );
}

export default Header;
