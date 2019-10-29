import React from 'react';
import axios from 'axios';

import '../css/App.css';

import Nav from './Nav';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      items: []
    };
  }

  componentDidMount(){
    axios.get('/user?ID=12345')
      .then(response => {
        // handle success
      })
      .catch(error => {
        // handle error
        console.log(error);
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
        <Gallery />
      </div>
      );
    }
}

export default App;
