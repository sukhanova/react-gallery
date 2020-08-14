import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryItem from '../GalleryItem/GalleryItem'

class App extends Component {

  componentDidMount() { 
    this.getPhotos();
  }

  getPhotos = () => { 
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => { 
        console.log(response);
      })
      .catch((error) => { 
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
          <GalleryList />
      </div>
    );
  }
}

export default App;
