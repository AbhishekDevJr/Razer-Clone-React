import react from 'react';
import {Component} from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "nav-bar">
                <nav>
                    <a href = "https://www.razer.com/"><img src = "razer-logo.svg" alt = "Razer Icon" /></a>
                    <a href = "https://www.razer.com/store">{this.props.linkText1}</a>
                    <a href = "https://www.razer.com/pc">{this.props.linkText2}</a>
                    <a href = "https://www.razer.com/console">{this.props.linkText3}</a>
                    <a href = "https://www.razer.com/mobile">{this.props.linkText4}</a>
                    <a href = "https://www.razer.com/lifestyle">{this.props.linkText5}</a>
                    <a href = "https://www.razer.com/services">{this.props.linkText6}</a>
                    <a href = "https://www.razer.com/community">{this.props.linkText7}</a>
                    <a href = "https://support.razer.com/">{this.props.linkText8}</a>
                    <a href = "/"><img src = "search.png" alt = "Search Icon" className = "icons"/></a>
                    <a href = "/"><img src = "icons8-shopping-cart-48.png" alt = "Cart Icon" className = "icons"/></a>
                </nav>
                <div className = "tempDiv">
                    <p>New Year’s Specials: Ready up for 2023 with our best picks and latest CES releases. <a href = "https://www.razer.com/campaigns/new-year-2023">Shop Now &#62;</a></p>
                </div>
            </div>
        );
    }
}

export default Navbar;