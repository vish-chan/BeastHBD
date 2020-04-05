import React, {Component} from 'react';
import ReactHowler from 'react-howler';
import { GifComponent } from './Gifs';
import {GIFS} from '../data/files'



const GifComponentList = (props) => {
    const gifs = GIFS.map(gif => <GifComponent key={gif.id} src={gif.src} alt={gif.alt} x={gif.x} y={gif.y} css={gif.css} scale={gif.scale}/>)
    
    return(
        <ul>
            {gifs}
        </ul>
    )
}

class HBDComponent extends Component {


    constructor(props) {
        super(props);
        this.handleDownLoad = this.handleDownLoad.bind(this);
    }

    handleDownLoad() {
        alert("LOLOLOLOLOLOL");
    }
    
    render() {
        return(
            <div className='base'>
                <div className='box'>
                    <div className='overlay'>
                        <div style={{position:'relative', width:'100%', height:'100%'}}>
                            <GifComponentList />
                        </div>
                    </div>
                    <div className='overlay center'>
                        <div className='birthday glow'>
                            HAPPY BIRTHDAY
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button onClick={this.handleDownLoad} className="giftbtn">
                        <img style={{width:'100%'}} src="images/download.gif" alt="Download"/>
                    </button>
                    <button onClick={this.props.onGiftClick} className="giftbtn">
                        <img style={{width:'100%'}} src="images/gift_btn.png" alt="Gifts"/>
                    </button>
                </div>
                <ReactHowler src="audio/Cut_hbd.ogg" preload={true} loop={true} playing={false} />
            </div>
        );
    }
}

export default HBDComponent;