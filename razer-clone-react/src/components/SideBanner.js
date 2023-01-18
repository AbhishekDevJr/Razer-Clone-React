import React from 'react';
import {Component} from 'react';

class SideBanner extends Component {
    constructor(props){
        super();
    }

    render(){
        return(
            <div className = "side-banner">
                <a href = {this.props.pLink1}><img src = {this.props.src1} alt = "Side Banner"/></a>
                <a href = {this.props.pLink2}><img src = {this.props.src2} alt = "Side Banner"/></a>
            </div>
        );
    }
}

export default SideBanner;