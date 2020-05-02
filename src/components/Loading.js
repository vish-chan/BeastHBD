import React from 'react';

const LoadingResources = (props) => {

    const style = {
        position: 'relative',
        margin: '60px auto',
        border: '10px solid white',
        overflow: 'hidden',
        width: props.width,
        height: props.height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
    }

    return(
        <div style={style}>
            <div style={{width:'60%', height:'40%'}}>
                <progress style={{position:'relative', width:'100%', height:20}} value={props.done} max={props.total}>
                    {`${Math.ceil(props.done/props.total*100)}%`}
                </progress>
            </div>
        </div>
    )
}

export default LoadingResources;