import React from 'react';


function Footer(){
  return (
    <div className="footer">
      <style jsx>{`
       .footer{
         border: 1px solid red;
         background-color: black;
         height: 10vh;

         // position:absolute;
         bottom:0;
         width:99%;
         color: white;
         text-align: center;
        }
      .icons {
        display: flex;
      }
      `}</style>
      <div className="icons">
       <i className="fab fa-facebook-f"> | FACEBOOK</i>
       <i className="fab fa-instagram"> INSTRAGRAM </i>
       <i className="fab fa-twitter-square"> TWITTER </i>
        <i className="fab fa-youtube-square"> YOUTUBE</i>
     </div>
     <br/>
      <p> Red truck Beer. All Right Resered</p>

    </div>
  );
}

export default Footer;
