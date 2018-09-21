import React ,{Component, Fragment} from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import './Albums.css';
import  GridItem from '../../UI/GridItem/GridItem';
import axios from "axios/index";

class Albums extends  Component{
    state={
        loading:false,
        loaded:false
    };


    componentDidMount(){
        this.setState({loading:true});
        axios.get('https://react-spotify-b66da.firebaseio.com/albums.json')
            .then(res=>{

                this.setState({albums:Object.values(res.data),loading:false, loaded:true});

            })
    }
    render(){
        let content=<Spinner/>;
        if( this.state.loaded && !this.state.loading){

            content=this.state.albums.map(artist=><GridItem type='album' key={artist.id} source={artist.picture} artistName={artist.name} songs={artist.songCount} id={artist.id}/>);
        }
        return(
            <Fragment>
                <h1 id='AlbumHeader'>Albums</h1>
                <hr/>
                <div id='AlbumDiv'>
                    {content}

                </div>


            </Fragment>
        );
    }
}
export default Albums;