import React from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {config} from '../config';

import Nav from './Nav';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

import '../css/App.css';

class App extends React.Component {

    

    state={
      photos: [],
      queryText: 'Smile',
      loading: true
    }; 
    // this.searchQueryFunction = this.searchQueryFunction.bind(this)
  // }  
    // searchQueryFunction(q) {
    //   this.setState({queryText:q})
    // }
  
    fetchingData = (searchingWord)=> {
          
          // const met = 'flickr.photos.getRecent'
          // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=76d06925ef597dab19e8b4ce20313661&tags=city&has_geo=1&per_page=24&format=json&nojsoncallback=1`;
          // const url = `https://www.flickr.com/services/rest/?method=${met}&api_key=${config.Key}&tags=${searchingWord}&per_page=24&format=json&nojsoncallback=1`;
          const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${searchingWord}&per_page=24&format=json&nojsoncallback=1`;
          // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${this.state.queryText}&per_page=24&format=json&nojsoncallback=1`;
       
          axios.get(url)
            .then(response => {
              this.setState({photos: response.data.photos.photo })
            })
            .catch(error => {
              console.log('>>a bobo happened with fetching or parsing. Error:', error);
            }).finally(()=>this.setState({loading:false}))
    }

    

  componentDidMount(){
    this.fetchingData("joy");
  }

  
  render(){

    return (
      <BrowserRouter>
          <div className="App">
            <SearchBar searchPhotos={this.fetchingData}/>
            <Nav />
            
            { this.state.loading 
            ? 'Loading...........................' 
            : <Gallery data={this.state.photos}/> 
            }
        </div>
      </BrowserRouter>
      );
    }
}

export default App;
