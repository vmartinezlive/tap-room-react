import React from 'react';

function Links() {


  return(
    <div>
      <style jsx>{`
					div {
						display:flex;
						justify-content: flex-end;
						text-align: center;
            flex-flow: row wrap;
					}
					a{
            display: flex;
            justify-content: flex-end;
            flex-flow:column wrap;
						width: 5rem;
            text-decoration: none;
            font-family: 'Allerta', sans-serif;
            padding-left: 15px;
            color: #FFF;
            font-size: 13px;
					}
          h1{
            font-family: 'Monoton', cursive;
            color: gold;

          }
				`}</style>
      <a href="#">#Home </a>
      <a href="#">#Snack Fest</a>
      <a href="#">#FAQ </a>
      <a href="#">#Apply</a>
      <a href="#">#Vendors </a>
      <a href="#">#Map </a>


    </div>
  );
}
export default Links;
