import * as actions from '../Actions/actionTypes';

const initialState={
    favoriteSongs:[],
    playLists: []
};

const musicReducer=(state=initialState, action)=>{
    switch (action.type){
        case actions.CREATE_PLAYLIST:
            const newPlayLists= state.playLists.concat(action.data);


            return {
                playLists:newPlayLists,
                favoriteSongs:state.favoriteSongs
            };

        case actions.GET_PLAYLISTS:
            return{
                favoriteSongs:state.favoriteSongs,
                playLists: action.data
            };

        default :
            return state
    }

};

export default musicReducer