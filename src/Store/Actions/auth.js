import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    };
};

export const authSuccess= authData=>{

    return{
        type:actionTypes.AUTH_SUCCESS,
        payload:authData
    };
};

export const authFail= error=>{
    return{
        type:actionTypes.AUTH_FAILED,
        error:error
    };
};

export const signUp=(email, password, name)=>{
    return dispatch =>{
        dispatch(authStart());
        const authData={
            email:email,
            password:password,
            returnSecureToken:true
        };
        //tauaksakh122
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA8LWRgDoWy1CWxI7jT2-DD0WGkOyWwmXE",authData)
            .then(res=>{
                console.log(res);

                dispatch(createUser(res.data, name))
            }).catch(err=>dispatch(authFail(err.response.data.error.message)));

    };
};
//salasana testi spostille
//tauaksakh122
export const logIn=(email, password)=>{
    return dispatch =>{
        dispatch(authStart());
        const authData={
            email: email,
            password:password,
            returnSecureToken:true
        };
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA8LWRgDoWy1CWxI7jT2-DD0WGkOyWwmXE",authData)
            .then(res=>{
                console.log(res);
                dispatch(authSuccess(res.data));

            }).catch(err=> dispatch(authFail(err.response.data.error.message))

        );


    }
};

export const createUser= (data, name)=>{
    return dispatch=>{

        let url='https://react-spotify-b66da.firebaseio.com/users/';
        url=url.concat(data.localId, '.json');

        const d={

            name:name,
            email:data.email
        };
        axios.put(url, d).then(res=>{
            console.log(res);
            dispatch(authSuccess(data))});

    };


};
export const logOut=()=>{

    return{
        type:actionTypes.LOG_OUT
    }

};
export const passwordsDontMatch=()=>{
    return{
        type:actionTypes.PASSWORDS_DONT_MATCH
    }
};
export const clearError=()=>{
    return{
        type:actionTypes.CLEAR_ERROR
    }
};