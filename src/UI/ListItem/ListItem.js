import  React, {Component} from 'react';
import './ListItem.css'
import play from '../../Assets/Pictures/icons/play.png';
import heart from '../../Assets/Pictures/icons/heart.png';

class ListItem extends Component{

    render(){
        return(
            <li id='ListItem'>
                <img src={play} className='ListItemPlay' alt='play button'/>
                <img src={heart} alt='heart' className='ListItemHeart'/>
                <span  className='ListItemTitle'> Title</span>
                <span className='ListItemArtist'>Artist</span>
                <span className='ListItemAlbum'> album</span>
                <span className='ListItemDate'>date</span>
            </li>
        );
    }
}
export default ListItem;