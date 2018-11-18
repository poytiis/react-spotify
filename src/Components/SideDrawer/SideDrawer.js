import React, {Component} from 'react';
import './SideDrawer.css';
import {NavLink} from 'react-router-dom';
import plus from '../../Assets/Pictures/icons/plusCircle.png';
import {connect} from 'react-redux';
import * as actions from '../../Store/Actions/index'


class SideDrawer extends Component{



    componentDidMount(){
        this.props.getPlayLists(this.props.userId);
        this.props.getFavors(this.props.userId);

    }

    render(){

        const playlists= this.props.playLists.map(playlist=><p className='userPlayList' key={playlist.id}>{playlist.name}</p>);


        return(
            <React.Fragment>


                <div id='SideDrawer'>


                    <NavLink to='/test' className='NavLink_notFinish'> Browse</NavLink>
                    <NavLink to='/test' className='NavLink_notFinish'> Radio</NavLink>
                    <p >YOUR LIBRARY</p>
                    <NavLink to='/test' className='NavLink_notFinish'> Recently played</NavLink>
                    <NavLink to='/favoriteSongs' className='NavLink'>Favorite songs</NavLink>
                    <NavLink to='/albums' className='NavLink'>Albums</NavLink>
                    <NavLink to='/artists' className='NavLink'>Artists</NavLink>
                    <NavLink to='/test' className='NavLink_notFinish'>Stations</NavLink>
                    <NavLink to='/localfiles' className='NavLink'>Local files</NavLink>
                    <NavLink to='/newplaylist' className='NavLink_notFinish'>Podcasts</NavLink>
                    <p> PLAYLISTS</p>
                    <div id='playListC'>
                        {playlists}
                    </div>
                    <hr/>
                    <div id='newPlayListC'>
                        <img src={plus} alt='plus'/>
                        <NavLink to='/newplaylist' className='newP'>New Playlist</NavLink>



                        {/*<h5 onClick={this.handleNewPlayList} >New Playlist</h5>*/}

                    </div>


                </div>

            </React.Fragment>


        );
    }

}
const mapStateToProps=state=>{
    return{
        playLists:state.music.playLists,
        userId:state.auth.userId
    }
};

const mapDispatchToProps =dispatch=>{
    return{
        getPlayLists:(id)=>dispatch(actions.getUsersPlayLists(id)),
        getFavors :(id)=>dispatch(actions.getUsersFavors(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SideDrawer);