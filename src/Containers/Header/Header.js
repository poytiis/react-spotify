import React ,{Component} from 'react';
import './Header.css'
import back from '../../Assets/Pictures/icons/back-arrow.png';
import forward from '../../Assets/Pictures/icons/forward-arrow.png'
import HeaderForm from './HeaderForm/HeaderForm';
import Button from '../../Components/Button/Button';
import picture from '../../Assets/Pictures/square3.jpg';
import dropDown from '../../Assets/Pictures/icons/dropDown.png';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../Store/Actions/index';

class Header extends Component{

    state={
        name:'',
        popupVisible: false
    };


    componentDidMount(){
        let url='https://react-spotify-b66da.firebaseio.com/users/';
        url=url.concat(this.props.userId,'/name.json');
        axios.get(url).then(res=>{this.setState({name:res.data})});

    }
    handleClick=()=> {
        if (!this.state.popupVisible) {

            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    };
    handleOutsideClick=(e)=> {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    };
    handleLogOut=()=>{
        document.removeEventListener('click', this.handleOutsideClick, false);
        this.props.logout()
    };

    render(){
        const buttonStyle={
            padding:'2px 5px',
            color:'grey',
            backgroundColor:'#1C1C1C',
            minWidth:'30px',
            fontSize:'12px',
            marginLeft: 'auto'
        };

        return(
            <div id='Header'>
                <button className="Arrow" title="back">
                    <img src={back} alt="back-arrow"/>
                </button>
                <button className="Arrow" title="forward">
                    <img src={forward} alt="forward-arrow"/>
                </button>
                <HeaderForm/>
                <Button stylee={buttonStyle}>upgrade</Button>
                <img src={picture} className='profilePic' alt='profile'/>
                <p>{this.state.name}</p>
                <div className='dropDown'>
                    <img src={dropDown} alt='drop down' className='dropDownImg' onClick={this.handleClick}/>
                    <div className='dropDownContent' ref={node=>this.node=node} style={{display:this.state.popupVisible?'block':'none'}}>
                        <p onClick={this.handleLogOut}>Log out</p>
                    </div>
                </div>



            </div>
        );
    }

}
const mapSateToProps= state =>{
    return{
        userId :state.auth.userId
    };

};
const mapDispatcToProps= dispatch=>{
    return{
        logout:()=>dispatch(actions.logOut())
    }
};

export  default connect(mapSateToProps, mapDispatcToProps)(Header);