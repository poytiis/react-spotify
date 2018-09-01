import React ,{Component} from 'react';
import './Header.css'
import back from '../../Assets/Pictures/icons/back-arrow.png';
import forward from '../../Assets/Pictures/icons/forward-arrow.png'
import HeaderForm from './HeaderForm/HeaderForm';
import Button from '../../Components/Button/Button';
import picture from '../../Assets/Pictures/square3.jpg';
import dropDown from '../../Assets/Pictures/icons/dropDown.png';

class Header extends Component{
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
                <p>Teemu Pöytäniemi</p>
                <img src={dropDown} alt='drop down' className='dropDown'/>


            </div>
        );
    }

}

export  default Header;