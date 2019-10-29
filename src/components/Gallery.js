import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props ) => {
   
    const photos = props.data.map((item, index) => {
        return <GalleryItem 
        photoSrc = {`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
        photoAlt = {`${item.title}`}
        key = {`${index}`}
        />
    })
   
    return ( 
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
          { photos }
        {/* <!-- Not Found --> */}
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </ul>
    </div>
    );
}

export default Gallery;
