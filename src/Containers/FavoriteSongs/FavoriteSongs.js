import React, {Component} from 'react';
import './FavoriteSongs.css';
import ListItem from '../../UI/ListItem/ListItem';

class FavoriteSongs extends Component{

    render(){
        return(
            <ul>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </ul>
        );
    }
}
export  default FavoriteSongs;