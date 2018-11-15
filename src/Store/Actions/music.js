import * as actionTypes from './actionTypes';
import axios from 'axios';


export const getUsersPlayLists=(userId)=>{

    return dispatch =>{

        let url='https://react-spotify-b66da.firebaseio.com/users/'.concat(userId,'/playlists/.json');

        axios.get(url).then(res=>{

            if (res.data===null) return;
            console.log(res);
            dispatch({type:actionTypes.GET_PLAYLISTS,data:Object.values(res.data)})
        })
    }

};

export const createPlayList =(name, description, userId)=>{
    return dispatch=>{
        let url='https://react-spotify-b66da.firebaseio.com/playlists/.json';
        const data={
            name:name,
            description:description,
            userId:userId
        };
       axios.post(url,data).then(res=>{

           console.log(res.data.name);
           const url2= 'https://react-spotify-b66da.firebaseio.com/users/'.concat(userId,'/playlists/.json');
           const data={
               id:res.data.name,
               name:name
           };
           axios.post(url2,data).then(res2=>{

               dispatch({type:actionTypes.CREATE_PLAYLIST, data:data})
           }).catch(err=>console.log(err.response.data.error.message))

       })
    }
};

export const addNewFav=(id, userId)=>{

    return dispatch=>{
        const url= 'https://react-spotify-b66da.firebaseio.com/users/'.concat(userId,'/songs/.json');
        let data={songId:id};
        axios.post(url,data).then(res=>{

           dispatch({type:actionTypes.ADD_NEW_FAV,data:data})
        })
    }
};

export const getUsersFavors =(userId)=>{
    return dispatch =>{

        let url='https://react-spotify-b66da.firebaseio.com/users/'.concat(userId,'/songs/.json');

        axios.get(url).then(res=>{

            if (res.data===null) return;
            console.log(res);
            dispatch({type:actionTypes.GET_FAVORITES,data:Object.values(res.data)})
        })
    }
};