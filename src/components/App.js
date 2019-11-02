import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {config} from '../config';

import Nav from './Nav';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

import '../css/App.css';
import NotFound from './NotFound';

class App extends Component {

    state={
      photos: [],
      queryText: 'Joy',
      loading: true,
    }; 

// Responsable for fetching data from Flickr API //
    fetchingData = (searchingWord) =>{
          
          const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${searchingWord}&per_page=24&format=json&nojsoncallback=1`;
       
          axios.get(url)
            .then(response => {
              this.setState({
                photos: response.data.photos.photo,
                queryText: searchingWord,
                loading: false
              })
              console.log(this.state.queryText)
            })
            .catch(error => {
              console.log('>>Something went wrong while fetching or parsing. Error:', error);
            })
    }

  loadingProcess = () => {
    this.setState({loading:true})
  }

    
  // generating the  galery on the first load up // 
  componentDidMount(){
    this.fetchingData(this.state.queryText);
  
}

  
  render(){
    return (
      <BrowserRouter>
          <div className="App">

          {console.log(this.state.loading)}
          {console.log(this.state.photos)}
          {console.log(this.state.queryText)}

          <SearchBar searchPhotos={this.fetchingData} loadingProcess={this.loadingProcess} />
          <Nav searchPhotos={this.fetchingData} />

          <Switch>
            {/* <Route exact path='/' render={()=><Redirect to='/search'/>} /> */}
            <Route  exact path="/" render={ () => (this.state.loading)
            ? <h2>LOADING....</h2>
            : <Gallery photos={this.state.photos} query={this.state.queryText} /> } />   


            <Route path='/fav/happy' render={()=><Gallery photos={this.state.photos} query={this.state.queryText} />}/>
            <Route path='/fav/fly' render={()=><Gallery photos={this.state.photos} query={this.state.queryText} />}/>
            <Route path='/fav/smile' render={()=><Gallery photos={this.state.photos} query={this.state.queryText} />}/>
            <Route component={NotFound}/>
          </Switch>
          </div>

      </BrowserRouter>
      );
    }
}

export default App;
