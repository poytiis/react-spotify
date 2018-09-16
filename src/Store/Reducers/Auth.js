import * as actions from '../Actions/actionTypes';

const initialState={
    token: null,
    userId:'vz75b4eBd0RVz1DpTFFtZBtjE7v1'

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