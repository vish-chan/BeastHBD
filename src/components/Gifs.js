import React, { Component } from 'react';

export const GifComponent = (props) => {
    return(
        <div style={{position:'absolute', left: props.x, top: props.y }} className={props.css!==undefined? props.css: ""}>
            <img style={{width: props.scale!==undefined? props.scale:'100%', height: props.scale!==undefined? props.scale:'100%'}} src={props.src} alt={props.alt} />
        </div>
    );
}




export class VideoGifComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        }
        this.openGift = this.openGift.bind(this);
    }

    openGift() {
        this.setState({
            opened: true,
        });
        this.props.click(this.props.videoSrc);
    }

    render() {
        return(
            <div style={{position:'absolute', left: this.props.x, top: this.props.y, width:250, height:260 }} className="centerImage">
                <button style={{width:'100%', height:'100%'}} className="giftbtn" onClick={this.openGift}>
                    <img style={{width:'100%', height:'100%'}} src={this.state.opened? this.props.opened: this.props.src} alt={this.props.alt} />
                </button>
            </div>
        );
    }
}