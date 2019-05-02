import React from 'react';
import truck from '../assets/images/ford.jpg';
import Footer from './Footer';


function About(){

  return(
    <div>
      <style jsx>{`
      img{
        width: 50rem;
        height: auto;
        float: left;
        padding: 1em;

      }
      p {
        font-size: 1.6rem;
        padding-top: 0.5em;
        margin-bottom: 3rem;
      }
      h1{
        font-family: 'Patua One', cursive;
        letter-spacing: 0.1em;
        color:black;
        font-size: 3rem;
        text-align: center;
        background-color: #FDFFF2;
        margin-top: 4rem; 
      }

      `} </style>
      <h1>This beer taste like I'm not going to work tomorrow.</h1>
      <img src={truck} alt="red truck"></img>
      <p>Red Truck Beer is built on the values of a simpler time, when you didn’t need a dictionary to order a drink, when trucks went to work, not the mall. When a handshake was a contract.</p>
      <p>We make Red Truck to be a reminder of those days, when all you needed for good times was a ride, a few friends, and some cold beers. That’s why we keep our beer simple and brew it honestly and independently, with no preservatives, pasteurization, or shortcuts.</p>
      <p>We may not get to meet everyone who drinks a delicious handcrafted Red Truck, but we think that after enjoying one they’ll know we make them the right way, with honesty and commitment.</p>
      <Footer/>
    </div>
  );
}

export default About;
