import  React, {Component} from 'react';
import './ListItem.css'
import play from '../../Assets/Pictures/icons/play_black.png';
import heart from '../../Assets/Pictures/icons/heart.png';
import heart_black from '../../Assets/Pictures/icons/heart_black.png';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../../Store/Actions/index';

class ListItem extends Component{
    state={
        isFavour:true,
        hover:false
    };

    componentDidMount(){
        const url='https://react-spotify-b66da.firebaseio.com/users/'.concat(this.props.userId,'/songs/',this.props.id,'.json');
        axios.get(url).then(data=>this.setState({isFavor:true})).catch();
    }

    switchFavor=()=>{
        console.log('klkjgh');
        if(this.state.isFavour){
            const url='https://react-spotify-b66da.firebaseio.com/users/'.concat(this.props.userId,'/songs/',this.props.id,'.json');
            console.log(url);
            axios.delete(url);
        }
    };
    handleHover=()=>{
        this.setState({hover:true});
    };
    handleMouseOut=()=>{
        this.setState({hover:false});
    };

    addFavorite=()=>{
        this.props.addFav(this.props.id, this.props.userId)
    };
    render(){
        return(
            <li id='ListItem' onMouseOver={this.handleHover} onMouseOut={this.handleMouseOut}>
                <img src={play} className='ListItemPlay' alt='play button' onClick={this.props.playControl}/>
                <img src={this.state.hover?heart_black:heart} alt='heart' className='ListItemHeart' onClick={this.addFavorite} />
                <span  className='ListItemTitle'> {this.props.tittle}</span>
                <span className='ListItemArtist'>{this.props.artist}</span>
                <span className='ListItemAlbum'> album</span>
                <span className='ListItemDate'>date</span>
            </li>
        );
    }
}
const mapDispatchToProps= dispatch=>{

    return{

        removeFav: (id,userId)=> dispatch(actions.removeFav(id,userId)),
        addFav:(id, userId)=>dispatch(actions.addNewFav(id,userId))
    };

};
const mapStateToProps= state=>{

    return{
        userId:state.auth.userId
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);