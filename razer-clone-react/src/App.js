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
        <Navbar linkText1 = "Store" linkText2 = "PC" linkText3 = "Console" linkText4 = "Mobile" linkText5 = "Lifestyle"
        linkText6 = "Services" linkText7 = "Community" linkText8 = "Support"/>
      </div>
    );
  }
}

export default App;
