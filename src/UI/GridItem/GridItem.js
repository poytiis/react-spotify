import React from 'react';
import './GridItem.css'
import {Link} from 'react-router-dom'

const gridItem=(props)=>{
    let borderRadius=100;
    let textAlign='center';
    let padding=0;
    let imageWidth='80%';
    let url='/albums/';

    switch (props.type){
        case 'artist':
            break;
        case 'album':
            textAlign= 'left';
            borderRadius=0;
            padding='0 2.5%';
            imageWidth='100%';
            url=url.concat(props.id);


            break;
        default:
            break;
    }
    const style={
        textAlign:textAlign,
        borderRadius:borderRadius,
        width:imageWidth

    };

    return (
        <div id='gridItem' style={{padding:padding, textAlign:textAlign}}>
            <img src={props.source} alt='cover' style={style}/>
            <Link to={url} className='gridLink'> {props.artistName}</Link>
            <p>{props.songs}  {props.songs===1?'song':'songs'}</p>
        </div>
    );
};
export default gridItem;