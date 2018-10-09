import * as actions from '../Actions/actionTypes';

const initialState={
    token: null,
    userId:null,
    error:null

};

const authReducer=(state=initialState, action)=>{

    switch (action.type){
        case actions.AUTH_SUCCESS:
            return{
                token: action.payload.idToken,
                userId:action.payload.localId,
                error:null
            };

        case actions.LOG_OUT:
            return{
                token:null,
                userId:null,
                error:null
            };
        case actions.AUTH_FAILED:
            return{
                token:null,
                userId:null,
                error:action.error.replace('_',' ')
            };
        case actions.PASSWORDS_DONT_MATCH:
            return{
                token:null,
                userId:null,
                error:"PASSWORDS DON'T MATCH"
            };
        case actions.CLEAR_ERROR:
            return{
                token:state.token,
                userId:state.userId,
                error:null
            };

        default:
            return state;
    }


};

export default authReducer;