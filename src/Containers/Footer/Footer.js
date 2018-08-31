import React , {Component} from 'react';
import pause from '../../Assets/Pictures/icons/pause.png';
import './Footer.css';
import next  from '../../Assets/Pictures/icons/next.png';
import repeat  from '../../Assets/Pictures/icons/repeat.png';
import play  from '../../Assets/Pictures/icons/play.png';
import shuffle  from '../../Assets/Pictures/icons/shuffle.png';
import previous  from '../../Assets/Pictures/icons/previous.png';
import volume  from '../../Assets/Pictures/icons/volume.png';


export default class  Footer extends Component{

    render(){
        return(

            <div id="nowPlayingBarContainer">

                <div id="nowPlayingBar">

                    <div id="nowPlayingLeft">
                        <div className="content">
					<span className="albumLink">
						<img src="https://firebasestorage.googleapis.com/v0/b/react-spotify-b66da.appspot.com/o/images%2Fsquare1.png?alt=media&token=d609d9fb-209d-41e5-86a2-0cf6e67254e4" className="albumArtwork" alt='img'/>
					</span>

                            <div className="trackInfo">

						<span className="trackName">
							<span>Happy Birthday</span>
						</span>

                                <span className="artistName">
							<span>Reece Kenney</span>
						</span>

                            </div>



                        </div>
                    </div>

                    <div id="nowPlayingCenter">

                        <div className="content playerControls">

                            <div className="buttons">

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


                            <div className="playbackBar">

                                <span className="progressTime current">0.00</span>

                                <div className="progressBar">
                                    <div className="progressBarBg">
                                        <div className="progress"> </div>
                                    </div>
                                </div>

                                <span className="progressTime remaining">0.00</span>


                            </div>


                        </div>


                    </div>

                    <div id="nowPlayingRight">
                        <div className="volumeBar">

                            <button className="controlButton volume" title="Volume button">
                                <img src={volume} alt="Volume"/>
                            </button>

                            <div className="progressBar">
                                <div className="progressBarBg">
                                    <div className="progress"> </div>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>

            </div>

        );


}}

