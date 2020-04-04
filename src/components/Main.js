import React, {Component} from 'react';
import {GIFS} from '../data/files'

const GifComponent = (props) => {
    return(
        <div style={{position:'absolute', left: props.x, top: props.y}} className={props.css!=undefined? props.css: ""}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

const GifComponentList = (props) => {
    const gifs = GIFS.map(gif => <GifComponent key={gif.id} src={gif.src} alt={gif.alt} x={gif.x} y={gif.y} css={gif.css}/>)
    
    return(
        <ul>
            {gifs}
        </ul>
    )
}


class MainComponent extends Component {
    
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
            </div>
        );
    }
}

export default MainComponent;