import * as actions from '../Actions/actionTypes';


const initialState={
    id:0,
    artist:'Apulanta',
    tittle:'Jumala',
    pic:'https://firebasestorage.googleapis.com/v0/b/react-spotify-b66da.appspot.com/o/images%2Fsquare3.jpg?alt=media&token=75481138-4c06-4e04-977f-3c9c5732980c',
    queue:[],
    playedSongs:[],
    playList:[2,5,1],
    backIndex:0,
    playIndex:0,
    shuffle:false,
    songPath:'https://firebasestorage.googleapis.com/v0/b/react-spotify-b66da.appspot.com/o/songs%2FApulanta%20-%20Jumala.mp3?alt=media&token=57513d11-0d94-40b2-b544-027e948c464a'
};


const playerReducer=(state=initialState, action)=>{
    switch (action.type){
        case actions.SWITCHSHUFFLE:
            return{...state, shuffle:!state.shuffle};

        case actions.PLAY_FROM_QUEUE:
            const queuePop= state.queue.filter((val,index)=>{
                return index!==0;
            });

            return {...state,...action.data, playedSongs:state.playedSongs.concat(state.id), queue:queuePop, id:action.id };

        case actions.PLAY_FROM_PLAYLIST:
            const newIndex=state.shuffle?action.randomIndex:state.playIndex+1;
            return{...state,...action.data, playIndex:newIndex, playedSongs:state.playedSongs.concat(state.id)};

        case actions.REMOVE_FAV:
            return state;

        case actions.SONG_ENDED:
            if(action.way==='queue'){
                const queuePop= state.queue.filter((val,index)=>{
                    return index!==0;
                });
                //const backIn= state.backIndex===0?state.backIndex:state.backIndex-1;
                return {...action.data, playedSongs:state.playedSongs.concat(state.id),
                    queue:queuePop, id:action.id, backIndex:state.backIndex, playList:state.playList
                };

            }else {
                if(state.backIndex===0){

                    return {...action.data, playedSongs:state.playedSongs.concat(state.id),
                        queue:[], id:action.id, backIndex:0, playList:state.playList, playIndex:state.playIndex+1
                    };
                }else{
                    return{};
                }

            }


        case actions.PLAY_NEW:

           return{...state,...action.data,playedSongs:state.playedSongs.concat(state.id),playIndex:action.index};
           // return{...action.data,playList:cutPlayList, playedSongs:state.playedSongs.concat(state.id),queue:state.queue};

        case actions.SET_PLAYLIST:

            return{...state, playList:action.data, };

        case actions.PLAY_NEXT:

            const queupop= state.queue.filter((val,index)=>{
                return index!==0;
            });
            const backIn= state.backIndex===0 ? state.backIndex : state.backIndex-1;
            return {...action.data, playedSongs:state.playedSongs.concat(state.id), queue:queupop, id:action.id, backIndex:backIn};

        case actions.ADD_QUEUE:
            return {...state,queue:state.queue.concat(action.data) };

        case actions.PLAY_PRE:

            return{...state,...action.data,  backIndex:state.backIndex+1, id:action.id};
        default:
            return state;
    }

};

export default playerReducer;