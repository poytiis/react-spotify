import React, {Component} from 'react';
import './Search.css';
import searchBig from '../../Assets/Pictures/icons/searchBig.png';
class Search extends Component{

    render(){
        return (
            <div id='Search'>
                <img src={searchBig} alt='search icon'/>
                <h1> Search Spotify</h1>
                <p> Find your favorite songs, artists, albums, podcasts &videos, playlists and friends</p>

            </div>
        );
    }
}

export default Search;