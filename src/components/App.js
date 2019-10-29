import React from 'react';
import {config} from '../config';
import axios from 'axios';

import Nav from './Nav';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

import '../css/App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      photos: [],
      queryText: ''
    };
  }

  componentDidMount(){
    console.log(config.Key);
    const searchingWord = 'dogs';
    const met = 'flickr.photos.getRecent'
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=76d06925ef597dab19e8b4ce20313661&tags=city&has_geo=1&per_page=24&format=json&nojsoncallback=1`;
    // const url = `https://www.flickr.com/services/rest/?method=${met}&api_key=${config.Key}&tags=${searchingWord}&per_page=24&format=json&nojsoncallback=1`;
    // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${searchingWord}&per_page=24&format=json&nojsoncallback=1`;
    
    console.log(url)
    axios.get(url)
      .then(response => {
        // console.log(response.data.photos.photo)
        this.setState({ photos: response.data.photos.photo })
      })
      .catch(error => {
        // handle error
        console.log('a bobo happen with fetching or parsing',error);
      })
      .finally(function () {
        // always executed
      });
  }

  render(){

    return (
      <div className="App">
        <SearchBar />
        <Nav />
        <Gallery data={this.state.photos}/>
      </div>
      );
    }
}

export default App;
