import  React, {Component} from 'react';
import './ListItem.css'
import play from '../../Assets/Pictures/icons/play.png';
import heart from '../../Assets/Pictures/icons/heart.png';
import {connect} from 'react-redux';

import * as actions from '../../Store/Actions/index';

class ListItem extends Component{

    render(){
        return(
            <li id='ListItem'>
                <img src={play} className='ListItemPlay' alt='play button' onClick={this.props.playControl}/>
                <img src={heart} alt='heart' className='ListItemHeart' onClick={this.props.removeFav.bind(this, this.props.title)}/>
                <span  className='ListItemTitle'> {this.props.title}</span>
                <span className='ListItemArtist'>{this.props.artist}</span>
                <span className='ListItemAlbum'> album</span>
                <span className='ListItemDate'>date</span>
            </li>
        );
    }
}
const mapDispatchToProps=dispatch=>{

    return{

        removeFav: (id)=> dispatch(actions.removeFav(id))
    };

};
export default connect(null, mapDispatchToProps)(ListItem);