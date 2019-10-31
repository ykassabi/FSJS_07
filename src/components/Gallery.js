import React from 'react';
import GalleryItem from './GalleryItem';
import noMatch from './NoMatch';

const Gallery = ({data} ) => {
   
    const photos = data.map((item, index) => {
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
          { photos ?  photos  : <noMatch />}
      </ul>
    </div>
    );
}

export default Gallery;
