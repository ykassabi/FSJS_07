import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery() {
    return ( 
        
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        <GalleryItem />
        {/* <!-- Not Found --> */}
        <li class="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </ul>
    </div>
    );
}

export default Gallery;
