import React from 'react';

const NoMatch = () => {
   
    return ( 
    <li className="not-found">
          <h2><span role='img' aria-label="thumb-down"> 👎 </span> No Results Found</h2>
          <h3>You search did not return any results. Please try again.</h3>
    </li>

    );
}

export default NoMatch;