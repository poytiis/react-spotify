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
import  SingleAlbum from '../../Containers/Albums/SingleAlbum/SingleAlbum';
import Browse from '../../Containers/Browse/Browse';
import NewPlayList from '../../Containers/NewPlayList/NewPlayList';
import LocalFiles from '../../Components/LocalFiles/LocalFiles'

class Layout extends Component {

    render(){
        let content= <Search/>;
        if(this.props.content==='Artists') content= <Artists/>;
        else if(this.props.content==='Search') content=<Search/>;
        else if(this.props.content==='Albums') content=<Albums/>;
        else if(this.props.content==='Songs') content=<FavoriteSongs/>;
        else if(this.props.content==='Browse') content=<Browse/>;
        else if(this.props.content==='AlbumId') content=<SingleAlbum {...this.props}/>;
        else if(this.props.content==='NewPlayList') content=<NewPlayList/>;
        else if(this.props.content==='LocalFiles') content=<LocalFiles/>;

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