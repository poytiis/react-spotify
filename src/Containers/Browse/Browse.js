import  React, {Component, Fragment} from 'react';
import './Browse.css';

class Browse extends Component{

    render(){
        return(
            <Fragment>
                <div id='BrowseHeader'>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>OVERVIEW</span>
                        <hr/>
                    </div>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>PODCAST</span>
                        <hr/>
                    </div>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>CHARTS</span>
                        <hr/>
                    </div>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>GENRES & MOODS</span>
                        <hr/>
                    </div>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>NEW RELEASES</span>
                        <hr/>
                    </div>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>DISCOVER</span>
                        <hr/>
                    </div>
                    <div className='BrowseHeaderSpanContainer'>
                        <span>CONCERTS</span>
                        <hr/>
                    </div>


                </div>
            </Fragment>

        );
    }
}
export default Browse;