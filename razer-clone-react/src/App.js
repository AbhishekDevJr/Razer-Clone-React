import './App.css';
import React from 'react';
import {Component} from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "App-div">
        <Navbar />
      </div>
    );
  }
}

export default App;
