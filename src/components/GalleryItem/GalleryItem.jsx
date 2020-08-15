import React, { Component } from 'react';

class GalleryItem extends Component { 
    render() { 
        return (
            <div>
                <p><img src={this.props.photos.path}></img></p>
            </div>
        )
    }
}

export default GalleryItem;