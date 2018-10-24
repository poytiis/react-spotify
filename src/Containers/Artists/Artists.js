import React ,{Component, Fragment} from 'react';
import axios from 'axios';
import square from '../../Assets/Pictures/square2.png';
import './Artists.css';
import  GridItem from '../../UI/GridItem/GridItem';
import Spinner from '../../UI/Spinner/Spinner';

class Artists extends  Component{
    state={
        loading:false,
        loaded:false
    };


    componentDidMount(){
        this.setState({loading:true});
        axios.get('https://react-spotify-b66da.firebaseio.com/artists.json')
            .then(res=>{

                this.setState({artist:Object.values(res.data),loading:false, loaded:true});

            })
    }
    shouldComponentUpdate(nextProps, nextState){

        return nextState.artist !== this.state.artist;
    }

    render(){
        let content=<Spinner/>;
        if( this.state.loaded && !this.state.loading && this.state.artist.length !==0){

            content=this.state.artist.map(artist=><GridItem type='artist' key={artist.name} source={square} artistName={artist.name} songs={artist.songs}/>);
        }
        return(
            <Fragment>
                <h1 id='ArtistHeader'>Artists</h1>
                <hr/>
                <div id='ArtistDiv'>
                    {content}

                </div>


            </Fragment>
        );
    }
}
export default Artists;