import React, { Component } from 'react';

class GalleryItem extends Component { 
    //create a showPhoto state property to indicate if it displays the photo
    state = {
        showPhoto: true,
    }

    //function to toggle the showPhoto value
    handleClick = () => { 
        this.setState({
            showPhoto: !this.state.showPhoto,
        })
    }

    render() { 
        return (
          <div>
            {/* ternary operator to the showPhoto value and display either the photo
            or description based on the value */}
            {this.state.showPhoto ?
              //show photo in case of truthy
              // attach onClick event listener and call handleClick function
              <img src={this.props.photo.path} onClick={this.handleClick} alt={this.props.photo.description} />
              :
              //show description in case of falsy
              <div onClick={this.handleClick}>
                <p>{this.props.photo.description}</p></div>}
            <div>
              {/* ternary operator to display different sentences based on the value retrieved
            rom the photo props */}
              {this.props.photo.likes === 0 ?
                <p>No people like this :(</p>  
                :
                <p>{this.props.photo.likes} people like this!</p>
                
            }
              <button onClick={() => this.props.likePhotoButton(this.props.photo)}>I LIKE IT!</button>
            </div>
          </div>
        )
    }
}

export default GalleryItem;