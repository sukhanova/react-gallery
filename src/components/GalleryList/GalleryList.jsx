import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component { 
    render() {
        
    const photosArray = this.props.photos.map((item, i) => {
        return (
            <GalleryItem key={i} photos={item} />
        )
    })  
        return (
            <div>
                {photosArray}
            </div>
        )
    }
}

export default GalleryList;