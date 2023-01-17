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
                    <a href = "https://www.razer.com/store">Store</a>
                    <a href = "https://www.razer.com/pc">PC</a>
                    <a href = "https://www.razer.com/console">Console</a>
                    <a href = "https://www.razer.com/mobile">Mobile</a>
                    <a href = "https://www.razer.com/lifestyle">Lifestyle</a>
                    <a href = "https://www.razer.com/services">Services</a>
                    <a href = "https://www.razer.com/community">Community</a>
                    <a href = "https://support.razer.com/">Support</a>
                    <a href = "/"><img src = "magnifying-glass-solid.svg" alt = "Search Icon" /></a>
                    <a href = "/"><img src = "cart-shopping-solid.svg" alt = "Cart Icon" /></a>

                </nav>
            </div>
        );
    }
}

export default Navbar;