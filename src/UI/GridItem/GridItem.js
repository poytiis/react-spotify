import React from 'react';
import './GridItem.css'


const gridItem=(props)=>{
    let borderRadius=100;
    let textAlign='center';
    let padding=0;
    let imageWidth='80%';

    switch (props.type){
        case 'artist':
            break;
        case 'album':
            textAlign= 'left';
            borderRadius=0;
            padding='0 2.5%';
            imageWidth='100%';


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
            <h4> {props.artistName}</h4>
            <p>{props.songs} songs</p>
        </div>
    );
};
export default gridItem;