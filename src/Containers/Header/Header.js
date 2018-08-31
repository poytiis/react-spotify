import React ,{Component} from 'react';
import './Header.css'
import back from '../../Assets/Pictures/icons/back-arrow.png';
import forward from '../../Assets/Pictures/icons/forward-arrow.png'
import HeaderForm from './HeaderForm/HeaderForm';
import Button from '../../Components/Button/Button';

class Header extends Component{
    render(){
        const buttonStyle={
            padding:'2px 5px',
            color:'grey',
            backgroundColor:'#1C1C1C',
            float:'right',
            margin: '14px 6px 0 0',
            minWidth:'30px',
            fontSize:'12px'
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
                <p>Teemu Pöytäniemi</p>
                <Button stylee={buttonStyle}>upgrade</Button>


            </div>
        );
    }

}

export  default Header;