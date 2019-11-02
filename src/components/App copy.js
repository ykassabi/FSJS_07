import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import {config} from '../config';

import Nav from './Nav';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import NoMatch from './NoMatch';

import '../css/App.css';

class App extends Component {

    

    state={
      photos: [],
      queryText: 'Joy',
      loading: true,
      PhotosLinks:[]
    }; 

  // Responsable for fetching data from Flickr API //
    fetchingData = (searchingWord)=> {
          
          // const met = 'flickr.photos.getRecent'
          const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${searchingWord}&per_page=24&format=json&nojsoncallback=1`;
          // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${this.state.queryText}&per_page=24&format=json&nojsoncallback=1`;
       
          axios.get(url)
            .then(response => {
              this.setState({
                photos: response.data.photos.photo,
                queryText: searchingWord,
              })
            })
            .catch(error => {
              console.log('>>a bobo happened with fetching or parsing. Error:', error);
            }).finally(()=>this.setState({loading:false}))
    }

    
  // generaing the  galery on the first load up // 
  componentDidMount(){
    this.fetchingData(this.state.queryText);
    {console.log()}
  }

  
  render(){

    // console.log({})
    
    return (
      <BrowserRouter>
          <div className="App">
          <SearchBar searchPhotos={this.fetchingData} />
          <Nav searchPhotos={this.fetchingData}/>
          
      <Switch>

          <Route path="/" render={() => (this.state.loading)
          ? <h2>LOADING....</h2>
          : <Gallery photos={this.state.photos} query={this.state.queryText} />} />  

            <Route path="/Happy" />
            <Route path="/Fly" />
            <Route path="/Snow" />
            <Route component={NoMatch} />
        </Switch>
          </div>

      </BrowserRouter>
      );
    }
}

export default App;
