import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryItem from '../GalleryItem/GalleryItem'

class App extends Component {

  state= {
    photos: []
  }

  componentDidMount() { 
    this.getPhotos();
  }

  getPhotos = () => { 
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => { 
        //console.log(response);
        this.setState({
          photos: response.data
        }, () => { 
            console.log(this.state.photos);
        })
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
        <br />
        <GalleryList photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
