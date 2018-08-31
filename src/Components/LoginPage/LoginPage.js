import React from 'react';
import LoginForm from'../../Containers/LoginForm/LoginForm';
import BackGroundIm from '../../UI/BackGroundIm/BackGroundIm';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import LogoFlex from '../../UI/LogoFlex/LogoFlex';
import TextDecoration from '../../UI/TextDecoration/TextDecoration';

const loginPage=(props)=>{
    const buttonStyle={
        border:'none',
        marginBottom:'15px'
    }
    return(
        <BackGroundIm>
            <div className='LoginFormDiv'>
                <LogoFlex/>

                <Button color='white'  bg='blue' stylee={buttonStyle}> Log in with Facebook</Button>
                <TextDecoration>OR</TextDecoration>
                <LoginForm/>
                <Link to='/'> kotiin</Link>
            </div>


        </BackGroundIm>

    );

}

export default loginPage;