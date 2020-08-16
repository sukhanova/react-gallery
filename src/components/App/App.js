import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryItem from '../GalleryItem/GalleryItem'

class App extends Component {
  state = {
    photos: [],
  };
 // call function to retrieve and display photos on a page
  componentDidMount() {
    this.getPhotos();
  }

  /* 
  function to perform a GET request to retrieve data from /gallery and store in state
  */
  getPhotos = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        //console.log(response);
        //set state to store tha data array into photos state property
        this.setState(
          {
            photos: response.data,
          },
          () => {
            console.log(this.state.photos);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  likePhotoButton = (id) => {
    console.log("likePhotoButton clicked!");
    axios({
      method: "PUT",
      url: "gallery/like/{id}",
    })
      .then((response) => {
        console.log(response);
        console.log(this.state);
        this.getPhotos();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Simpons family life</h1>
        </header>
        <br />
        {/* Passing the arrays of photos as a prop ot the GalleryList Component*/}
        <GalleryList
          photos={this.state.photos}
          likePhotoButton={this.likePhotoButton}
        />
      </div>
    );
  }
}

export default App;
