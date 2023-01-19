import React from 'react';
import {Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <footer className = "foot">
                <ul>
                    <li className = "li-1st">Shop</li>
                    <li><a href = "/" target = "_blank">RazerStores</a></li>
                    <li><a href = "/" target = "_blank">RazerCafe</a></li>
                    <li><a href = "/" target = "_blank">Store Locator</a></li>
                    <li><a href = "/" target = "_blank">Purchase Programs</a></li>
                    <li><a href = "/" target = "_blank">Education</a></li>
                    <li><a href = "/" target = "_blank">Exclusives</a></li>
                    <li><a href = "/" target = "_blank">RazerStore Rewards</a></li>
                    <li><a href = "/" target = "_blank">Newsletter</a></li>
                </ul>

                <ul>
                    <li className = "li-1st">Explore</li>
                    <li><a href = "/" target = "_blank">Technology</a></li>
                    <li><a href = "/" target = "_blank">Chroma RGB</a></li>
                    <li><a href = "/" target = "_blank">Concepts</a></li>
                    <li><a href = "/" target = "_blank">Esports</a></li>
                    <li><a href = "/" target = "_blank">Collabs</a></li>
                </ul>

                <ul>
                    <li className = "li-1st">Support</li>
                    <li><a href = "/" target = "_blank">Get Help</a></li>
                    <li><a href = "/" target = "_blank">Registration & Warranty</a></li>
                    <li><a href = "/" target = "_blank">RazerStore Support</a></li>
                    <li><a href = "/" target = "_blank">RazerCare</a></li>
                    <li><a href = "/" target = "_blank">Manage Razer ID</a></li>
                    <li><a href = "/" target = "_blank">Support Videos</a></li>
                    <li><a href = "/" target = "_blank">Accessibility Statement</a></li>
                </ul>

                <ul>
                    <li className = "li-1st">Company</li>
                    <li><a href = "/" target = "_blank">About Us</a></li>
                    <li><a href = "/" target = "_blank">Careers</a></li>
                    <li><a href = "/" target = "_blank">Press Room</a></li>
                    <li><a href = "/" target = "_blank">zVentures</a></li>
                    <li><a href = "/" target = "_blank">Contact Us</a></li>
                </ul>

                <div className = "gamers">
                    <p>FOR GAMERS. BY GAMERS.™</p>
                    <div>
                        <a href = "/"><img src = "facebook-icon.svg" alt = "Facebook Icon"/></a>
                        <a href = "/"><img src = "insta-icon.svg" alt = "Instagram Icon"/></a>
                        <a href = "/"><img src = "twitter-icon.svg" alt = "Twitter Icon"/></a>
                    </div>
                </div>
            </footer>
            <div className = "divider-line">
                <div className = "line-element"></div>
                <div className = "trademark">
                    <p>Developed and Maintained by © Abhishek Choudhari</p>
                    <a href = "https://github.com/AbhishekDevJr"><img src = "icons8-github-48.png" alt = "GitHub Icon"/></a>
                    <a href = "https://www.linkedin.com/in/abhishek-choudhari-408526173/"><img src = "icons8-linkedin-circled-48.png" alt = "GitHub Icon"/></a>
                </div>
            </div>
            </>
        );
    }
}

export default Footer;