import * as actionTypes from './actionTypes';
import axios from 'axios';



export const removeFav=(id)=>{
    return dispatch =>{

    }
};

export const playNext=(id)=>{
    return dispatch=>{
        let url='https://react-spotify-b66da.firebaseio.com/songs/';
        url=url.concat(id,'.json');
        axios.get(url).then(data=>{
            dispatch({type:actionTypes.PLAY_NEXT,data:data.data, id:id})
        });
    }
};

export const playPre=(id)=>{
    return dispatch=>{
        let url='https://react-spotify-b66da.firebaseio.com/songs/';
        url=url.concat(id,'.json');
        axios.get(url).then(data=>{
            dispatch({type:actionTypes.PLAY_PRE,data:data.data, id:id})
        });
    };

};
export const playNew=(id,index) =>{
    return dispatch =>{
        let url='https://react-spotify-b66da.firebaseio.com/songs/';
        url=url.concat(id,'.json');
        axios.get(url).then(data=>{
            dispatch({type:actionTypes.PLAY_NEW,data:data.data, id:id ,index:index})
        });
    }
};