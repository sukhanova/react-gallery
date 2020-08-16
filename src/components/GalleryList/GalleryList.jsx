import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

class GalleryList extends Component { 
    render() {
        
    {/* get each individual photo from the list and pass it to GalleryItem Component as a prop */ } 
    const photosArray = this.props.photos.map((item, i) => {
        return (
            <GalleryItem key={i} photo={item} likePhotoButton={this.props.likePhotoButton} />
        )
    })  
        return (
            <div className="photoGallery">
                {photosArray}
            </div>
        )
    }
}

export default GalleryList;