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

        case actions.ADD_NEW_FAV:
            const newFavs=state.favoriteSongs.concat(action.data);
            return{
                playLists:state.playLists,
                favoriteSongs:newFavs
            };

        case actions.GET_FAVORITES:
            return{
                playLists:state.playLists,
                favoriteSongs:action.data
            };

        default :
            return state
    }

};

export default musicReducer