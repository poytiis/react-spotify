import React from 'react';
import BackGroundIm from '../../UI/BackGroundIm/BackGroundIm';
import './SignUpPage.css';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import LogoFlex from '../../UI/LogoFlex/LogoFlex';
import TextDecoration from '../../UI/TextDecoration/TextDecoration';
import SignUpForm from "../../Containers/SignUpForm/SignUpForm";

const signUpPage=(props)=>{
    const buttonStyle={
        border:'none',
        marginBottom:'15px'
    };
    return(
        <BackGroundIm>
            <div className='LoginFormDiv'>
                <LogoFlex/>

                <Button color='white'  bg='blue' stylee={buttonStyle}> Sign up  with Facebook</Button>
                <TextDecoration>OR</TextDecoration>
                <SignUpForm history={props.history}/>
                <Link to='/' className='authLink'> Home</Link>
            </div>


        </BackGroundIm>

    );

};

export default signUpPage;