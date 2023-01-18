import React from 'react';
import {Component} from 'react';

class Banner extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "banner-div">
                <a href = {this.props.pLink} target = "_blank"><img src = {this.props.src} alt = "Banner 1"/></a>
            </div>
        );
    }
}

export default Banner;