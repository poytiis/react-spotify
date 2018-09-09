import React from 'react';
import './SideDrawer.css';
import {NavLink} from 'react-router-dom';
import plus from '../../Assets/Pictures/icons/plusCircle.png';


const sideDrawer=()=>{

    return(
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
                <NavLink to='/test' className='NavLink'>Podcasts</NavLink>
                <p> PLAYLISTS</p>
            <hr/>
            <div>
                <img src={plus} alt='plus'/>
                <h5  >New Playlist</h5>

            </div>


        </div>
    );
};

export default sideDrawer;