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
        type:actionTypes.AUTH_FAIL,
        error:error
    };
};

export const signUp=(email, password, name)=>{
    return dispatch =>{
        dispatch(authStart());
        const authData={
            email:'testi3@gmail.com',
            password:'tauaksakh122',
            returnSecureToken:true
        };
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA8LWRgDoWy1CWxI7jT2-DD0WGkOyWwmXE",authData)
            .then(res=>{
                console.log(res);
                dispatch(authSuccess(res.data));
            });

    };
};

export const logIn=(email, password)=>{
    return dispatch =>{
        dispatch(authStart());
        const authData={
            email:'testi2@gmail.com',
            password:'tauaksakh122',
            returnSecureToken:true
        };
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA8LWRgDoWy1CWxI7jT2-DD0WGkOyWwmXE",authData)
            .then(res=>{
                console.log(res);
                dispatch(authSuccess(res.data));
            });


    }
};

export const createUser= (userId)=>{
    let url='https://react-spotify-b66da.firebaseio.com/';
    url=url.concat('testi2@gmail.com/');

    const data={
        name:'Teemu'
    };
    axios.put(url, data).then(res=>{console.log(res);});
};