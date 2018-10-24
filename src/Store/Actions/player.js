import * as actionTypes from './actionTypes';
import axios from 'axios';



export const removeFav=(id, userId)=>{
    return dispatch =>{
        let url='https://react-spotify-b66da.firebaseio.com/users/';
        url=url.concat(userId,'/songs/',id,'.json');
        axios.delete(url);

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

export const songEnded= (id, way, randomIndex)=>{
    return dispatch=>{
        let url='https://react-spotify-b66da.firebaseio.com/songs/';
        url=url.concat(id,'.json');
        axios.get(url).then(data=>{
            if(way==='queue') dispatch({type:actionTypes.PLAY_FROM_QUEUE, data:data.data, id:id});

            else dispatch({type:actionTypes.PLAY_FROM_PLAYLIST, data:data.data, id:id, random:randomIndex});
        });
    }

};
export const addNewPlayList=(id,name,description)=>{
    console.log('jsduysiu');
    return dispatch=>{
            const url='https://react-spotify-b66da.firebaseio.com/users/'.concat(id,'/playlists/',name,'.json',);
            const data={
                description:description
            };
            axios.put(url,data).then(res=>{
                dispatch({type:actionTypes.ADD_NEW_PLAYLIST})
            }).catch(err=>console.log(err))
    }
};