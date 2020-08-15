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
            <div onClick={this.handleClick} className="individualPhoto">
                {this.state.showPhoto ?
                    <img
                        key={this.props.photo.id}
                        src={this.props.photo.path}
                        alt={this.props.photo.description} />
                    :
                    <div>
                        <p>{this.props.photo.description}</p>
                    </div>
                }
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