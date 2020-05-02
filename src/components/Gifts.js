import React, {Component} from 'react';
import { VideoGifComponent } from './Gifs';
import {GIFTS} from '../data/files'

const GIFT_GIF = "images/gift_1.gif"

const Gift = (props) => {

       return(
            <VideoGifComponent src={GIFT_GIF} opened={props.self.opened} alt="Gift" videoSrc={props.self.video} x={props.self.x} y={props.self.y} css={props.self.css} scale={props.self.scale} click={props.handleGiftClick}/>
       )
}


const GiftList = (props) => {
    const gifts = GIFTS.map(gift => <Gift key={gift.id} self={gift} handleGiftClick={props.handleGiftClick}/>)

    return(
        <ul>
            {gifts}
        </ul>
    )
}


class PlayVideo extends Component {

    constructor(props) {
        super(props);
        this.handleVideoClose = this.handleVideoClose.bind(this);
    }

    handleVideoClose() {
        this.video.pause();
        this.video.currentTime = 0;
        this.props.handleClose();
    }

    render() {
        return(
            <div style={{position: 'absolute', width:800, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <video ref={video => this.video = video} width="100%" height="100%" src={this.props.src} autoPlay controls preload/>
                <button onClick={this.handleVideoClose}>Close</button>
            </div>
        )
    }
}


class GiftComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoOpen: false,
            videoSrc: "",
        }
        this.handleGiftClick = this.handleGiftClick.bind(this);
        this.handleCloseVideo = this.handleCloseVideo.bind(this);
    }

    handleGiftClick(src) {
        this.setState({
            videoSrc: src,
            videoOpen: true,
        });
    }

    handleCloseVideo() {
        this.setState({
            videoOpen: false,
        })
    }
    
    render() {
        return(
            <div className='base'>
                <div className='largebox'>
                    <div className='overlay center'>
                        <div>
                            <GiftList handleGiftClick={this.handleGiftClick}/>
                        </div>
                    </div>
                    <div className='overlay center' style={{display:this.state.videoOpen?'block':'none'}}>
                        <PlayVideo src={this.state.videoSrc} handleClose={this.handleCloseVideo}/>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <button className="giftbtn" style={{width:300, height:150}} onClick={this.props.onBackClick}>
                        <img style={{width:'100%'}} src="images/back.gif" alt="Back"/>
                    </button>
                </div>
            </div>
        );
    
        
    }
}

export default GiftComponent;