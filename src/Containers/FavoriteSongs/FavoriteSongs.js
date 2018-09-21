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
        if(this.state.loaded) return;
        let url='https://react-spotify-b66da.firebaseio.com/users/';
        url=url.concat(this.props.userId,'/songs.json');
        axios.get(url).then(res=>{
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
        if(this.state.loaded){
            content=this.state.songs.map((res,index)=> <ListItem tittle={res.tittle} key={res.id}
                                                                 artist={res.artist} id={res.id}
                                                                 playControl={this.playSong.bind(this,res.id,index)}/>)
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
        userId:state.auth.userId
    };
};
const mapDispatchToProps= dispatch=>{
    return{
        setPlayList:(data)=>dispatch({type:actionTypes.SET_PLAYLIST,data:data}),
        playNew:(id,index)=>dispatch(actions.playNew(id,index))
    };
};
export  default connect(mapSateToProps, mapDispatchToProps)(FavoriteSongs);