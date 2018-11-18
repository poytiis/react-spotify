import React, {Component} from 'react';
import axios from 'axios';
import ListItem from '../../../UI/ListItem/ListItem';

class SingleAlbum extends Component{
    state={
        songs:[]
    };

    componentDidMount(){

        const url='https://react-spotify-b66da.firebaseio.com/albums/'.concat(this.props.match.params.id,'/songs.json');
        axios.get(url).then(res=>{
            const songs=Object.values(res.data);
            console.log(songs);
            songs.map(song=>{
                const songurl='https://react-spotify-b66da.firebaseio.com/songs/'.concat(song,'.json');
                axios.get(songurl).then(res2=>{
                    this.setState(previous=>({songs:previous.songs.concat(res2.data)}))
                })
            })
        })

    }

    render(){

        const content= this.state.songs.map(song=><ListItem tittle={song.tittle} artist={song.artist} key={song.id} id={song.id} album={song.album}/>);
        return(
            <React.Fragment>
                <ul>
                    {content}
                </ul>

            </React.Fragment>
        );
    }

}



export default SingleAlbum;