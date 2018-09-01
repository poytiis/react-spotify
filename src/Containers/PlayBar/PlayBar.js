import React, {Component} from 'react';
import './PlayBar.css';
import pic from '../../Assets/Pictures/square3.jpg';
import next  from '../../Assets/Pictures/icons/next.png';
import repeat  from '../../Assets/Pictures/icons/repeat.png';
import play  from '../../Assets/Pictures/icons/play.png';
import shuffle  from '../../Assets/Pictures/icons/shuffle.png';
import previous  from '../../Assets/Pictures/icons/previous.png';
import volume  from '../../Assets/Pictures/icons/volume.png';
import pause from '../../Assets/Pictures/icons/pause.png';
import queue from '../../Assets/Pictures/icons/queue.png';
import devices from '../../Assets/Pictures/icons/multiple-devices.png';

class PlayBar extends Component{

    render(){
        return(
            <div id='PlayBar'>

                <div id='PlayBarLeft'>
                    <img src={pic} alt='Now Playing'/>
                    <div id='PlayBarLeftText'>
                        <h4>In Flames</h4>
                        <p>In Flames</p>
                    </div>

                </div>
                <div id='PlayBarCenter'>
                    <div id='PlayBarCenterTop'>
                        <div>
                            <button className="controlButton shuffle" title="Shuffle button">
                                <img src={shuffle} alt="Shuffle"/>
                            </button>

                            <button className="controlButton previous" title="Previous button">
                                <img src={previous} alt="Previous"/>
                            </button>

                            <button className="controlButton play" title="Play button">
                                <img src={play} alt="Play"/>
                            </button>

                            <button className="controlButton pause" title="Pause button" style={{display:'none'}}>
                                <img src={pause} alt="Pause"/>
                            </button>

                            <button className="controlButton next" title="Next button">
                                <img src={next} alt="Next"/>
                            </button>

                            <button className="controlButton repeat" title="Repeat button">
                                <img src={repeat} alt="Repeat"/>
                            </button>
                        </div>

                    </div>
                    <div id='PlayBarCenterBottom'>
                        <span>0.00</span>
                        <div id='songProgress'>

                        </div>
                        <span> 3.00</span>

                    </div>

                </div>
                <div id='PlayBarRight'>
                    <div id='volumeBar'>

                    </div>
                    <button className="controlButton volume" title="Volume button">
                        <img src={volume} alt="Volume"/>
                    </button>
                    <button className="controlButton " title="Alternative devices">
                        <img src={devices} alt="Devices"/>
                    </button>
                    <button className="controlButton" title="Add to queue">
                        <img src={queue} alt="Queue"/>
                    </button>


                </div>

            </div>
        );
    }
}
export default PlayBar;