const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  users: [
    { id: 1, name: 'Имя Фамилия' },
    { id: 2, name: 'Имя Фамилия' },
    { id: 3, name: 'Имя Фамилия' },
    { id: 4, name: 'Имя Фамилия' },
  ],
  messagesData: [
    {
      id: 1,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя Фамилия',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
    {
      id: 2,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя Фамилия',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
    {
      id: 3,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя Фамилия',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
    {
      id: 4,
      avatar:
        'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
      userName: 'Имя Фамилия',
      date: '2020-09-15',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: 10,
        avatar:
          'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        userName: 'Имя',
        date: '2020-09-15',
        message: action.newMessageText,
      };
      return {
        //создали и возвращаем объект с новыми данными
        ...state, // создали копию state
        messagesData: [...state.messagesData, newMessage], // закинули новые данные в элемент
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => {
  return {
    type: ADD_MESSAGE, newMessageText
  };
};

export default dialogsReducer;
