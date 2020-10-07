const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postsData: [
    { id: 1, message: 'Привет. Как дела?', likesCounter: 3 },
    { id: 2, message: 'Это мой первый пост!', likesCounter: 5 },
    { id: 3, message: 'Меня не остановить :)', likesCounter: 4 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {

  let stateCopy;

  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        id: 10,
        message: state.newPostText,
        likesCounter: 0,
      }
      stateCopy = {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost],
      }
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      stateCopy = {
        ...state,
        newPostText: action.newPost,
      }
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updatePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
  }
}

export default profileReducer;
