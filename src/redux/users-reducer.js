import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id=== action.userId) {
                        return  {...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u=>{
                    if(u.id=== action.userId) {
                        return  {...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: action.users,
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId]:[state.followingInProgress.filter(id => id != action.userId)]}
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {return {type: FOLLOW, userId}}
export const unfollowSuccess = (userId) => {return {type: UNFOLLOW, userId}}
export const setUsers = (users) => {return {type: SET_USERS, users}}
export const setCurrentPage = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}}
export const setTotalUsersCount = (totalUsersCount) => {return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}}
export const toggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}}
export const toggleFollowingInProgress = (followingInProgress, userId) => {return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    });
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    userAPI.postFollow(userId).then(data => {
        dispatch(toggleFollowingInProgress(false, userId))
        if(data.resultCode === 0){
            dispatch(followSuccess(userId));
        }
    })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    userAPI.deleteFollow(userId).then(data => {
        if(data.resultCode === 0){
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingInProgress(false, userId))
    })
}

