import React from 'react';
import './GridItem.css'


const gridItem=(props)=>{
    let borderRadius=0;
    let textAlign='center';
    switch (props.type){
        case 'Artist':
            borderRadius=100;
            break;
        case 'Albums':
            textAlign= 'left';
            break;
        default:
            borderRadius=0;
    }

    return (
        <div id='gridItem'>
            <img src={props.source} alt='cover'/>
            <h4> {props.artistName}</h4>
            <p>{props.songs} songs</p>
        </div>
    );
};
export default gridItem;