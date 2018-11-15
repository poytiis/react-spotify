export {
    logIn,
    signUp,
    createUser,
    logOut,
    passwordsDontMatch,
    clearError,
    autoLogIn

} from './auth'

export {
    removeFav,
    playNext,
    playPre,
    playNew,
    songEnded,
    addNewPlayList
}from './player'


export {
    getUsersPlayLists,
    createPlayList,
    addNewFav,
    getUsersFavors
} from './music'