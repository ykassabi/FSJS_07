import React from 'react';
import { NavLink } from 'react-router-dom';
// import Gallery from './Gallery';

const Nav = ({searchPhotos}) => {

    return ( 
      <nav className="main-nav">
        <ul>
          <li onClick={ () => searchPhotos("happy")}><NavLink to='/happy' >Happy</NavLink></li>
          <li onClick={ () => searchPhotos("smile")}><NavLink to='/smile' >Smile</NavLink></li>
          <li onClick={ () => searchPhotos("fly")}><NavLink to='/fly' >Fly</NavLink></li>

        </ul>
      </nav>
    )


}

export default Nav;
