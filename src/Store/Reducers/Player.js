import * as actions from '../Actions/actionTypes';


const initialState={
    id:0,
    artist:'Apulanta',
    tittle:'Jumala',
    pic:'https://firebasestorage.googleapis.com/v0/b/react-spotify-b66da.appspot.com/o/images%2Fsquare3.jpg?alt=media&token=75481138-4c06-4e04-977f-3c9c5732980c',
    queue:[1,0,1,0],
    playedSongs:[],
    playList:[],
    backIndex:0,
    playIndex:0,
    songPath:'https://firebasestorage.googleapis.com/v0/b/react-spotify-b66da.appspot.com/o/Five%20Finger%20Death%20Punch%20-%20The%20Pride.mp3?alt=media&token=e08b0353-f910-4026-b053-1f541b644780'
};


const playerReducer=(state=initialState, action)=>{
    switch (action.type){
        case actions.CHANGE_SONG:
            const newState={
                artist:action.artist,
                song:action.title
            };
            return newState;

        case actions.REMOVE_FAV:
            return state;

        case actions.PLAY_NEW:

            const cutPlayList=state.playList.filter((val,index)=>{
                return index<action.index;
            });
            return{...action.data,playList:cutPlayList, playedSongs:state.playedSongs.concat(state.id),queue:state.queue};

        case actions.SET_PLAYLIST:

            return{...state, playList:action.data, };

        case actions.PLAY_NEXT:

            const queupop= state.queue.filter((val,index)=>{
                return index!==0;
            });
            const backIn= state.backIndex===0?state.backIndex:state.backIndex-1;
            return {...action.data, playedSongs:state.playedSongs.concat(state.id), queue:queupop, id:action.id, backIndex:backIn};

        case actions.ADD_QUEUE:
            return {...state,queue:state.queue.concat(action.data) };

        case actions.PLAY_PRE:

            return{...action.data, queue:state.queue.concat(state.id), backIndex:state.backIndex+1, id:action.id, playedSongs:state.playedSongs};
        default:
            return state;
    }

};

export default playerReducer;