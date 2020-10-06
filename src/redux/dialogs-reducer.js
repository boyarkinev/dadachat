const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  users: [
    { id: 1, name: 'Женя Панин' },
    { id: 2, name: 'Таня Татушка' },
    { id: 3, name: 'Петя Колесников' },
    { id: 4, name: 'Дамир Бака' },
    { id: 5, name: 'Слава Юматов' },
    { id: 6, name: 'Лёша Батов' },
    { id: 7, name: 'Коля Сидоров' },
    { id: 8, name: 'Саша Назаров' },
  ],
  messagesData: [
    {
      id: 1,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
    {
      id: 2,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
    {
      id: 3,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
    {
      id: 4,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
  ],
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: 10,
        avatar:
          'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        userName: 'Имя',
        date: '2020-09-15',
        message: state.newMessageText,
      };
      const stateCopy = {...state};
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      const stateCopy = {...state};
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
  }
}

export default dialogsReducer;
