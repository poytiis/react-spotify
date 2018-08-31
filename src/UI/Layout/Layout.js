import React, {Component} from 'react';

import Footer from '../../Containers/Footer/Footer'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import Header from '../../Containers/Header/Header';
import FriendActivity from '../../Components/FriendActivity/FriendActivity';
import MiddleContainer from '../MiddleContainer/MiddleContainer';
import Search from '../../Containers/Search/Search';
import Artists from '../../Containers/Artists/Artists';

class Layout extends Component {

    render(){
        let content= <Search/>;
        if(this.props.content==='Artists') content= <Artists/>;
        else if(this.props.content==='Search') content=<Search/>;


       return(
         <React.Fragment>
           <Header/>
           <SideDrawer/>
           <FriendActivity/>
             <MiddleContainer>
                 {content}
             </MiddleContainer>
           <Footer/>

       </React.Fragment>

       );


    }
}

export default Layout;