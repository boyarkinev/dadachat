const initialState = {
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
};

const friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;
