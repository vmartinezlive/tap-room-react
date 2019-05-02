import React from 'react';


function Footer(){
  return (
    <div className="footer">
      <style jsx>{`
       .footer{
         margin-top: 40px;
         background-color: black;
         height: 10vh;


         // position:absolute;
         bottom:0;
         width:100%;
         color: white;
         text-align: center;
        }
      .icons {
        display: flex;
        justify-content: space-evenly;
        padding-top: 0.5em;
      }
      `}</style>
      <div className="icons">
        <i className="fab fa-facebook-f"> | FACEBOOK</i>
        <i className="fab fa-instagram"> INSTRAGRAM </i>
        <i className="fab fa-twitter-square"> TWITTER </i>
        <i className="fab fa-youtube-square"> YOUTUBE</i>
      </div>
      <p> Red truck Beer. All Right Resered</p>

    </div>
  );
}

export default Footer;
