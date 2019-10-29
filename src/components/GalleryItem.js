import React from 'react';

const GalleryItem= ({photoSrc, photoAlt}) => {
    return ( 
        <li>
          <img src={photoSrc} alt={photoAlt} />
        </li>
    );
}

export default GalleryItem;