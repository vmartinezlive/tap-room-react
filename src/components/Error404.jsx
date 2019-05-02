import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  <style jsx>{`
     h2{
       color: red;
       font-size: 5rem;
     }


  `}
   </style>

  return(
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};


export default Error404;
