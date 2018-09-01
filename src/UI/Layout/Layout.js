import React, {Component} from 'react';
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import Header from '../../Containers/Header/Header';
import FriendActivity from '../../Components/FriendActivity/FriendActivity';
import MiddleContainer from '../MiddleContainer/MiddleContainer';
import Search from '../../Containers/Search/Search';
import Artists from '../../Containers/Artists/Artists';
import Albums from '../../Containers/Albums/Albums';
import PlayBar from '../../Containers/PlayBar/PlayBar';
import FavoriteSongs from '../../Containers/FavoriteSongs/FavoriteSongs';

class Layout extends Component {

    render(){
        let content= <Search/>;
        if(this.props.content==='Artists') content= <Artists/>;
        else if(this.props.content==='Search') content=<Search/>;
        else if(this.props.content==='Albums') content=<Albums/>;
        else if(this.props.content==='Songs') content=<FavoriteSongs/>;

       return(
         <React.Fragment>
           <Header/>
           <SideDrawer/>
           <FriendActivity/>
             <MiddleContainer>
                 {content}
             </MiddleContainer>
           <PlayBar/>

       </React.Fragment>

       );


    }
}

export default Layout;