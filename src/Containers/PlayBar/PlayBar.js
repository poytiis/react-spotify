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
import mute  from '../../Assets/Pictures/icons/volume-mute.png';

import {connect} from 'react-redux';
import * as actions from '../../Store/Actions/index';
import * as actionTypes from '../../Store/Actions/actionTypes';

class PlayBar extends Component{

    constructor(props){
        super(props);
        this.audioRef=React.createRef();
        this.volRef=React.createRef();
        this.playStartRef=React.createRef();
        this.playEndRef=React.createRef();
        this.state={
            playing:false,
            duration:0,
            timePlayed:0.00,
            prosentPlayed:0,
            vol:40,
            mute:false
        };
    }

    handlePlay=()=>{
        if(this.state.playing){
            this.audioRef.current.pause();
            this.setState({playing:false});
        }else{
            this.audioRef.current.play();
            this.setState({playing:true});
        }


    };
    formatTime=(seconds)=>{
        const minutes= Math.floor(seconds/60);
        const secondsStr=Math.round(seconds- (minutes*60));

        const zero= (secondsStr<10)?'0':'';

        return minutes+'.'+ zero+ secondsStr;

    };

    setDuration=()=>{
        const time=this.formatTime(this.audioRef.current.duration);
        this.setState({duration:time})
    };
    timeUpdate=()=>{

        if(this.state.duration !==0){

            const time= this.formatTime(this.audioRef.current.currentTime);
            const prosent= (time/this.state.duration)*100;

            this.setState({timePlayed:time, prosentPlayed:prosent})
        }
    };

    handleVolClick= e=>{

        const percentage=(e.clientX- this.volRef.current.offsetLeft)/69;

        if(percentage<1 && percentage>0){
            this.audioRef.current.volume=percentage;
            this.setState({vol:percentage*100});
        }
    };
    mute=()=>{

        this.setState(previous=>({mute:!previous.mute}))
    };

    handlePlayBarClick= e=>{
        const length= this.playEndRef.current.offsetLeft-this.playStartRef.current.offsetLeft-10;
        const percentage=(e.clientX- this.playStartRef.current.offsetLeft)/length;

        this.audioRef.current.currentTime=percentage*this.state.duration;
    };

    render(){

        return(
            <div id='PlayBar'>

                <div id='PlayBarLeft'>
                    <img src={this.props.pic} alt='Now Playing'/>
                    <div id='PlayBarLeftText'>
                        <h4>{this.props.artist}</h4>
                        <p>{this.props.songName}</p>
                    </div>

                </div>
                <div id='PlayBarCenter'>
                    <div id='PlayBarCenterTop'>
                        <div>
                            <button className="controlButton shuffle" title="Shuffle button">
                                <img src={shuffle} alt="Shuffle"/>
                            </button>

                            <button className="controlButton previous" title="Previous button"
                                    onClick={this.props.playPre.bind(this,this.props.playedSongs[this.props.playedSongs.length-1])}>
                                <img src={previous} alt="Previous"/>
                            </button>

                            <button className="controlButton play" title="Play button" onClick={this.handlePlay}>
                                <img src={this.state.playing?pause:play} alt="Play"  />
                            </button>



                            <button className="controlButton next" title="Next button"
                                    onClick={this.props.playNext.bind(this, this.props.queue[0])}>
                                <img src={next} alt="Next"/>
                            </button>

                            <button className="controlButton repeat" title="Repeat button">
                                <img src={repeat} alt="Repeat"/>
                            </button>
                        </div>

                    </div>
                    <div id='PlayBarCenterBottom'>
                        <span>{this.state.timePlayed}</span>
                        <div id='songProgress' ref={this.playStartRef} onClick={this.handlePlayBarClick}>
                            <div id='songPlayed' style={{width:this.state.prosentPlayed+'%'}}> </div>
                        </div>
                        <span ref={this.playEndRef}>{this.state.duration}</span>

                    </div>

                </div>
                <div id='PlayBarRight'>
                    <div id='volumeBar' onClick={this.handleVolClick} ref={this.volRef}>
                        <div id='volumeControl' style={{width:this.state.vol+'%'}}> </div>

                    </div>
                    <button className="controlButton volume" title="Volume button" onClick={this.mute}>
                        <img src={this.state.mute?mute:volume} alt="Volume"/>
                    </button>
                    <button className="controlButton " title="Alternative devices">
                        <img src={devices} alt="Devices"/>
                    </button>
                    <button className="controlButton" title="Add to queue">
                        <img src={queue} alt="Queue"/>
                    </button>


                </div>

                <audio ref={this.audioRef} src={this.props.songSrc} onCanPlay={this.setDuration} onTimeUpdate={this.timeUpdate}>

                </audio>

            </div>
        );
    }
}
const mapStateToProps=state=>{
    return{
        songName:state.player.tittle,
        artist:state.player.artist,
        songSrc:state.player.songPath,
        queue:state.player.queue,
        pic:state.player.pic,
        playedSongs:state.player.playedSongs
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        playNext: (song)=>dispatch(actions.playNext(song)),
        playPre:(song)=>dispatch(actions.playPre(song)),

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayBar);