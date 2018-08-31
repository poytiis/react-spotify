import React from 'react';
import './ArtistListItem.css';


const artistListItem=(props)=>{

    return (
        <div id='ArtistListItem'>
            <img src={props.source} alt='artist'/>
            <h4> {props.artistName}</h4>
            <p>{props.songs} songs</p>
        </div>
    );
};
export default artistListItem;