// pls see the read me file for quick stat up
import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {config} from '../config1';

import Nav from './Nav';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import NotFound from './NotFound';

import '../css/App.css';

class App extends Component {

  // keeping the state on data(photo), and query resqted
    state={
      photos: [],
      queryText: 'Joy',
      loading: true,
    }; 

// Responsable for fetching data from Flickr API //
    fetchingData = (searchingWord) =>{
          
          // request id for safe restricted search , limited to 24 photos
          const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Key}&tags=${searchingWord}&safe_search=3&content_type=1&per_page=24&format=json&nojsoncallback=1`;
       
          axios.get(url)
            .then(response => {
              // update the state after the requ
              this.setState({
                photos: response.data.photos.photo,
                queryText: searchingWord,
                loading: false
              })
              console.log(this.state.queryText)
            })
            .catch(error => {
              //for now just put a console, refactor after to be displayed to the user.
              console.error('>>Something went wrong while fetching or parsing. Error:', error);
            })
    }

  // function to switch the loading process to true , 
  loadingProcess = () => {
    this.setState({loading:true})
  }


  componentDidMount() { 

    let path = window.location.pathname 
    
    this.fetchingData(this.state.queryText);
    
    if(path === '/'){
       return this.fetchingData('joy') 
      }else{ 
        console.log('full path',path)
        console.log('slice 8',path.slice(8))
        console.log(path.slice(2))
        return this.fetchingData(path.slice(8)) 
      }
    }

  
  render(){
    return (
      <BrowserRouter>

          <div className="App">

            {/* Header of the app */}
            <SearchBar searchPhotos={this.fetchingData} loadingProcess={this.loadingProcess} />
            <Nav searchPhotos={this.fetchingData} />

            <Switch>

              <Route  exact path="/" render={ () => (this.state.loading)
                ? <h2>LOADING....</h2>
                : <Gallery photos={this.state.photos} query={this.state.queryText} /> } />   
              
              {/* Routes for the search component */}
              <Route path={`/:q`} render={()=><Gallery photos={this.state.photos} query={this.state.queryText} /> }/>  
              
              {/* Route for the nav component */}
              <Route path='/fav/babies' render={()=><Gallery photos={this.state.photos} query={this.state.queryText} />}/>
              <Route path='/fav/fly' render={()=><Gallery photos={this.state.photos} query={this.state.queryText} />}/>
              <Route path='/fav/smile' render={()=><Gallery photos={this.state.photos} query={this.state.queryText} />}/>
              
              {/* Route to fall back to  */}
              <Route component={NotFound}/>
            
            </Switch>
          </div>

      </BrowserRouter>
      );
    }
}

export default App;
