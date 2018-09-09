import * as actions from '../Actions/actionTypes';

const initialState={
    token: null,
    userId:null

};

const authReducer=(state=initialState, action)=>{

    switch (action.type){
        case actions.AUTH_SUCCESS:
            const newState={
                token: action.payload.idToken,
                userId:action.payload.localId
            };
            return newState;


        default:
            return state;
    }


};

export default authReducer;