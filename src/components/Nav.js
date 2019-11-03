import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({searchPhotos}) => {

    return ( 
      <nav className="main-nav">
        <ul>
          <li onClick={ () => searchPhotos("hope")}><NavLink to='/fav/hope'>Hope</NavLink></li>
          <li onClick={ () => searchPhotos("fly")}><NavLink to='/fav/fly' >Fly</NavLink></li>
          <li onClick={ () => searchPhotos("smile")}><NavLink to='/fav/smile' >Smile</NavLink></li>
          
        </ul>

      </nav>
    )


}

export default Nav;
