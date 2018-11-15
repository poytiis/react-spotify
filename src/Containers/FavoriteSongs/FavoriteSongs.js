import React, {Component} from 'react';
import './FavoriteSongs.css';
import ListItem from '../../UI/ListItem/ListItem';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import * as actionTypes from "../../Store/Actions/actionTypes";
import * as actions from '../../Store/Actions/index';

class FavoriteSongs extends Component{

    state={
        songs:[],
        songIds:[],
        loaded:false,
        totalSongs:0,
        currentPlayList:false
    };

    playSong=(id,index)=>{
        if(!this.state.currentPlayList) this.props.setPlayList(this.state.songIds);
        this.props.playNew(id,index);
        this.setState({currentPlayList:true})
    };

    componentDidMount(){


        if(this.props.favSongs.length===0){
            this.setState({loaded:true});
            return;
        }
        this.props.favSongs.map(song=>{
            let songUrl='https://react-spotify-b66da.firebaseio.com/songs/'.concat(song.songId,'.json');
            axios.get(songUrl).then(res=>{
                if(res.data!==null) {
                    const newSongs= this.state.songs.concat(res.data);
                    const newSongIds=this.state.songIds.concat(res.data.id);
                    this.setState({songs:newSongs,songIds:newSongIds});
                    if(newSongs.length===this.props.favSongs.length) this.setState({loaded:true});
                }
            })
        });




    }

    test=()=>{
        if(this.state.loaded) return;
        let url='https://react-spotify-b66da.firebaseio.com/users/';
        url=url.concat(this.props.userId,'/songs.json');
        axios.get(url).then(res=>{
            console.log(res);
            if(res.data===null){
                this.setState({loaded:true});
                return;
            }
            this.setState({totalSongs:Object.values(res.data).length});
            var index=1;
            Object.values(res.data).map(obj=>{
                let songUrl='https://react-spotify-b66da.firebaseio.com/songs/';
                songUrl= songUrl.concat(obj,'.json');
                axios.get(songUrl).then(res2=>{
                    index++;
                    if(res2.data!==null) {
                        const newSongs= this.state.songs.concat(res2.data);
                        const newSongIds=this.state.songIds.concat(res2.data.id);
                        this.setState({songs:newSongs,songIds:newSongIds});
                    }

                    if(index===this.state.totalSongs){
                        this.setState({loaded:true});
                    }
                })
            })
        });
    }


    render(){
        console.log(this.state.songs);
        let content=<Spinner/>;
        if(this.state.loaded && this.state.songs.length !==0){
            content=this.state.songs.map((res,index)=> <ListItem tittle={res.tittle} key={res.id}
                                                                 artist={res.artist} id={res.id}
                                                                 playControl={this.playSong.bind(this,res.id,index)}/>)
        }

        else if(this.state.loaded && this.state.songs.length ===0){
            content=<p> You don't have favorite songs, let's add a few</p>
        }
        return(

            <ul>
                {content}
               
            </ul>
        );
    }
}
const mapSateToProps= state=>{
    return{
        userId:state.auth.userId,
        favSongs: state.music.favoriteSongs
    };
};
const mapDispatchToProps= dispatch=>{
    return{
        setPlayList:(data)=>dispatch({type:actionTypes.SET_PLAYLIST,data:data}),
        playNew:(id,index)=>dispatch(actions.playNew(id,index))
    };
};
export  default connect(mapSateToProps, mapDispatchToProps)(FavoriteSongs);