import  React from 'react';

import './FirstPage.css';
import Button from '../Button/Button';
import BackGroundIm from '../../UI/BackGroundIm/BackGroundIm';
import {Link} from 'react-router-dom';
import LogoFlex from '../../UI/LogoFlex/LogoFlex';
import TextDecoration from '../../UI/TextDecoration/TextDecoration'

const firstPage=(props)=>{


   return(
       <BackGroundIm>
           <div  id="FirstPage">
              <LogoFlex/>

               <div id="main_login_header_c"><h1 id="main_login_header">Play any song, anytime, free.</h1> </div>
               <Button color='white' bg='rgb(0,205,110)' click={()=>props.history.push('/signup')}> sign up free</Button>

               <TextDecoration width='304px'>ALREADY HAVE AN ACCOUNT?</TextDecoration>
               <div> <Button color='black' bg='white' click={()=>props.history.push('/login')}> log in</Button></div>
               <Link to='/test' className='Link'> SETTINGS</Link>

           </div>

       </BackGroundIm>
   );

};




export default firstPage;