import React from 'react';
import truck from '../assets/images/ford.jpg';


function About(){

  return(
    <div>
      <img src={truck} alt="red truck"></img>
      <p>Red Truck Beer is built on the values of a simpler time, when you didn’t need a dictionary to order a drink, when trucks went to work, not the mall. When a handshake was a contract.</p>
      <br/>
      <p>We make Red Truck to be a reminder of those days, when all you needed for good times was a ride, a few friends, and some cold beers. That’s why we keep our beer simple and brew it honestly and independently, with no preservatives, pasteurization, or shortcuts.</p>
      <br/>
      <p>We may not get to meet everyone who drinks a delicious handcrafted Red Truck, but we think that after enjoying one they’ll know we make them the right way, with honesty and commitment.</p>
    </div>
  );
}

export default About;
