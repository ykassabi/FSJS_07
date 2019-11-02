import React from 'react';
import GalleryItem from './GalleryItem';
import NoMatch from './NoMatch';

const Gallery = ({photos, query}) => {
    // let name = match.params.name;
    // console.log(name)
   
    const photoslist = photos.map((item, index) => {
        return <GalleryItem 
        photoSrc = {`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
        photoAlt = {`${item.title}`}
        key = {`${index}`}
        />
    })
   
    return ( 
    <div className="photo-container">
      <h2>{query}'s Photos</h2>
      <ul>
          { photoslist.length ? photoslist : <NoMatch /> }
      </ul>
    </div>
    );
}

export default Gallery;
