import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  postsData: [
    { id: 1, message: 'Привет. Как дела?', likesCounter: 3 },
    { id: 2, message: 'Это мой первый пост!', likesCounter: 5 },
    { id: 3, message: 'Меня не остановить :)', likesCounter: 4 },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        id: 10,
        message: action.newPostText,
        likesCounter: 0,
      }
      return { //создали и возвращаем объект с новыми данными
        ...state, // создали копию state
        postsData: [...state.postsData, newPost], // закинули новые данные в элемент
        newPostText: '', // закинули новые данные в элемент
      }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status })

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI
      .getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI
      .getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data));
      });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI
      .updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
  }
}

export default profileReducer;
