import './App.css';
import React from 'react';
import {Component} from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SideBanner from './components/SideBanner';
import Footer from './components/Footer';

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

        <Banner src = "banner-2.png" pLink = "https://www.razer.com/console-earphones/razer-hammerhead-hyperspeed-for-xbox"/>

        <Banner src = "banner-3.png" pLink = "https://www.razer.com/streaming-cameras/razer-kiyo-pro-ultra"/>

        <SideBanner src1 = "side-banner-1.png" pLink1 = "https://www.razer.com/campaigns/new-year-2023" src2 = "side-banner-2.png" pLink2 = "https://www.razer.com/gaming-chairs/razer-enki-pro-automobili-lamborghini"/>

        <SideBanner src1 = "side-banner-3.png" pLink1 = "https://www.razer.com/console-controllers/razer-wolverine-v2-pro" src2 = "side-banner-4.png" pLink2 = "https://www.razer.com/gaming-speakers/razer-leviathan-v2-pro"/>

        <SideBanner src1 = "side-banner-5.png" pLink1 = "https://www.razer.com/mobile-handhelds/razer-edge" src2 = "side-banner-6.png" pLink2 = "https://www.razer.com/shop/pc/gaming-laptops?query=:newest:category:system-laptops:system-display:14%2Binch"/>

        <Footer />
      </div>
    );
  }
}

export default App;
