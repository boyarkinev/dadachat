import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  // isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} });

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  }
}

export default authReducer;
