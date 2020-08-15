import React, { Component } from 'react';

class GalleryItem extends Component { 
    render() { 
        return (
            <div>
                <p><img src={this.props.photo.path} /></p>
                <p>{this.props.photo.description}</p>
                <button onClick={(event) => this.props.likePhotoButton(this.props.photo.id)}>I Like It!</button>
                <span>
                    {this.props.photo.likes === 0 ?
                        <p>No people love this :(</p>
                        :
                        <p>{this.props.photo.likes} people love this!</p>
                    }
                </span>
                
            </div>
        )
    }
}

export default GalleryItem;