import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component { 
    render() { 
        return (
            <div>
            <p>Gallery goes here</p>
                <img src="images/goat_small.jpg" />
                <GalleryItem />
            </div>
        )
    }
}

export default GalleryList;