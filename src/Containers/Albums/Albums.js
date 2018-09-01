import React ,{Component, Fragment} from 'react';


import square from '../../Assets/Pictures/square2.png';
import './Albums.css';
import  GridItem from '../../UI/GridItem/GridItem';

class Albums extends  Component{
    render(){
        return(
            <Fragment>
                <h1 id='AlbumHeader'>Artists</h1>
                <hr/>
                <div id='AlbumDiv'>
                    <GridItem type='album' source={square} songs='7' artistName='Teemu'/>
                    <GridItem type='album' source={square} songs='7' artistName='Teemu'/>
                    <GridItem type='album' source={square} songs='7' artistName='Teemu'/>
                    <GridItem type='album' source={square} songs='7' artistName='Teemu'/>
                    <GridItem type='album' source={square} songs='7' artistName='Teemu'/>


                </div>


            </Fragment>
        );
    }
}
export default Albums;