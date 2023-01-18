import './App.css';
import React from 'react';
import {Component} from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "App-div">
        <Navbar linkText1 = "Store" linkText2 = "PC" linkText3 = "Console" linkText4 = "Mobile" linkText5 = "Lifestyle"
        linkText6 = "Services" linkText7 = "Community" linkText8 = "Support"/>
        <Banner src = "banner-1.png" pLink = "https://www.razer.com/gaming-laptops/razer-blade-16"/>
      </div>
    );
  }
}

export default App;
