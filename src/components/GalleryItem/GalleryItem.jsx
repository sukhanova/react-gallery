import React, { Component } from 'react';

class GalleryItem extends Component { 
    render() { 
        return (
            <div>
                <p><img src={this.props.photos.path} /></p>
                <p>{this.props.photos.description}</p>
                <button>I Like It!</button>
            </div>
        )
    }
}

export default GalleryItem;