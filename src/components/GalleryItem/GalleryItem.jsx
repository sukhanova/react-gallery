import React, { Component } from 'react';

class GalleryItem extends Component { 

    state = {
        showPhoto: true,
    }

    handleClick = () => { 
        this.setState({
            showPhoto: !this.state.showPhoto,
        })
    }

    render() { 
        return (
          <div>
            {this.state.showPhoto ?
              <img src={this.props.photo.path} onClick={this.handleClick} alt={this.props.photo.description} />
              : <div onClick={this.handleClick}>
                <p>{this.props.photo.description}</p></div>}
            <p>{this.props.photo.likes} people like it!</p>
            <button onClick={(event) => this.props.likePhotoButton(this.props.photo)}>I LIKE IT!</button>
          </div>
        )
    }
}

export default GalleryItem;