import React , {Component} from 'react';
import './NewPlayList.css'
import NewPLayListForm from './NewPlayListForm/NewPlayListForm';

class NewPlayList extends Component{


    render(){
        return(
            <div id='NewPlayList'>
                <span className='spanTop'>Create playlist</span>
                <hr/>
              <NewPLayListForm close={this.props.close}/>

            </div>
        );
    }
}

export default NewPlayList