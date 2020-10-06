import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';

const store = {

  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Привет. Как дела?', likesCounter: 3 },
        { id: 2, message: 'Это мой первый пост!', likesCounter: 5 },
        { id: 3, message: 'Меня не остановить :)', likesCounter: 4 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },

    friendsList: {
      friends: [
        {
          id: 1,
          name: 'Женя Панин',
          avatar:
            'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        },
        {
          id: 1,
          name: 'Таня Татушка',
          avatar:
            'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        },
        {
          id: 1,
          name: 'Коля Сидоров',
          avatar:
            'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        },
        {
          id: 1,
          name: 'Саша Назаров',
          avatar:
            'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        },
        {
          id: 1,
          name: 'Слава Юматов',
          avatar:
            'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
        },
      ],
    },
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.friendsList = friendsReducer(this._state.friendsList, action)

    this._callSubscriber(this._state);
  },
};

export default store;