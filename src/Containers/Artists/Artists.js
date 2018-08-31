import React ,{Component, Fragment} from 'react';

import ArtistListItem from './ArtistListItem/ArtistListItem';
import square from '../../Assets/Pictures/square2.png';
import './Artists.css';

class Artists extends  Component{
    render(){
        return(
            <Fragment>
                <h1 id='ArtistHeader'>Artists</h1>
                <hr/>
                <div id='ArtistDiv'>
                    <ArtistListItem source={square} songs='5' artistName='Teemu'/>

                    <ArtistListItem source={square} songs='5' artistName='Teemu'/>
                    <ArtistListItem source={square} songs='5' artistName='Teemu'/>
                    <ArtistListItem source={square} songs='5' artistName='Teemu'/>
                    <ArtistListItem source={square} songs='5' artistName='Teemu'/>

                </div>


            </Fragment>
        );
    }
}
export default Artists;