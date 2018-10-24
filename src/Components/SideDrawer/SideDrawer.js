import React, {Component} from 'react';
import './SideDrawer.css';
import {NavLink} from 'react-router-dom';
import plus from '../../Assets/Pictures/icons/plusCircle.png';
import NewPlayList from '../../Containers/NewPlayList/NewPlayList';
import {connect} from 'react-redux';
import * as actions from '../../Store/Actions/index'


class SideDrawer extends Component{

    state={
        playLists:[],
        showForm:false
    };
    handleNewPlayList=()=>{
        this.setState({showForm:true});
    };
    closeForm=()=>{

        this.setState({showForm:false});
    };
    componentDidMount(){
        this.props.getPlayLists(this.props.userId);
    }

    render(){

        const newForm= this.state.showForm===true ? <NewPlayList close={this.closeForm}/> : null;
        return(
            <React.Fragment>


                    {newForm}


                <div id='SideDrawer'>


                    <NavLink to='/test' className='NavLink'> Browse</NavLink>
                    <NavLink to='/test' className='NavLink'> Radio</NavLink>
                    <p >YOUR LIBRARY</p>
                    <NavLink to='/test' className='NavLink'> Recently played</NavLink>
                    <NavLink to='/favoriteSongs' className='NavLink'>Favorite songs</NavLink>
                    <NavLink to='/albums' className='NavLink'>Albums</NavLink>
                    <NavLink to='/artists' className='NavLink'>Artists</NavLink>
                    <NavLink to='/test' className='NavLink'>Stations</NavLink>
                    <NavLink to='/test' className='NavLink'>Local files</NavLink>
                    <NavLink to='/newplaylist' className='NavLink'>Podcasts</NavLink>
                    <p> PLAYLISTS</p>
                    <hr/>
                    <div>
                        <img src={plus} alt='plus'/>
                        <NavLink to='/newplaylist' className='NavLink'>New Playlist</NavLink>

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
        getPlayLists:(id)=>dispatch(actions.getUsersPlayLists(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SideDrawer);