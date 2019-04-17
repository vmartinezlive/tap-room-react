import React from 'react';
import { Link } from 'react-router-dom';

function Links() {


  return(
    <div>
      <style jsx>{`
					div {
						display:flex;
						justify-content: flex-start;
						text-align: center;
            flex-flow: row wrap;
            margin-top: 2rem;
        	}
					a {
            display: flex;
            justify-content: flex-end;
            flex-flow:column wrap;
						width: 7rem;
            text-decoration: none;
            font-family: 'Allerta', sans-serif;
            padding-left: 1rem;
            color: #FFF;
            font-size: 1rem;
            list-style: none;

					}
          h1{
            font-family: 'Monoton', cursive;
            color: gold;

          }

          a:hover{
            color: #42e8de;
          }

				`}</style>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <a>#Home</a>
      </Link>
      <a href="#">#Snack Fest</a>
      <Link to="/displayproduce" style={{ textDecoration: 'none' }}>
        <a>#Produce</a>
      </Link>
      <a href="#">#FAQ </a>
      <a href="#">#Apply</a>
      <a href="#">#Vendors </a>
      <a href="#">#Map</a>


    </div>
  );
}
export default Links;
