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

  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        id: 10,
        message: state.newPostText,
        likesCounter: 0,
      }
      return { //создали и возвращаем объект с новыми данными
        ...state, // создали копию state
        newPostText: '', // закинули новые данные в элемент
        postsData: [...state.postsData, newPost], // закинули новые данные в элемент
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return { //создали и возвращаем объект с новыми данными
        ...state, // создали копию state
        newPostText: action.newPost, // закинули новые данные в элемент
      }
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
