import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts:[
        {id: 1, message: "Hi. How are you?", likes: 16},
        {id: 2, message: "It`s my first post", likes: 20},
        {id: 3, message: "It`s my first post", likes: 18},
        {id: 4, message: "It`s my first post", likes: 40},
    ],
    newPostText: 'ILYA DMYTRENKO',
    profile: null,
    status: ''
}


export const profileReducer = (state = initialState, action) => {
    let stateCopy  ={...state};
    stateCopy.posts = [...state.posts]
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.messageText,
                likes: 0
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
    }

    return state;
}

export const addPostActionCreator = (messageText) => {
    return {type: ADD_POST, messageText};
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if(data.resultCode === 0){
            dispatch(setStatus(status));
        }
    })
}