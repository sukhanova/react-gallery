import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component { 
    render() {
        
    const photosArray = this.props.photos.map((item, i) => {
        return (
            <div key={i}>
                <p><img src={item.path}></img></p>
            </div>
        )
    })  
        return (
            <div>
            <p>Gallery goes here</p>
        
                <GalleryItem />
                {photosArray}
            </div>
        )
    }
}

export default GalleryList;