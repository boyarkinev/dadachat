import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogsUser = (props) => {
  return (
    <li className={classes.user}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

const Message = (props) => {
  return <p className={classes.message}>{props.message}</p>;
};

const MessageInfo = (props) => {
  return (
    <p className={classes.user}>
      {props.name} <span className={classes.date}>{props.date}</span>
    </p>
  );
};

const MessageContainer = (props) => {
  return (
    <div className={classes.messageContainer}>
      <img src={props.img} className={classes.avatar} alt={props.description} />
      <MessageInfo name={props.userName} date={props.date} />
      <Message message={props.message} />
    </div>
  );
};

let userData = [
  {id: 1, name: 'Женя Панин'},
  {id: 2, name: 'Таня Татушка'},
  {id: 3, name: 'Петя Колесников'},
  {id: 4, name: 'Дамир Бака'},
  {id: 5, name: 'Слава Юматов'},
  {id: 6, name: 'Лёша Батов'},
  {id: 7, name: 'Коля Сидоров'},
  {id: 8, name: 'Саша Назаров'},
]

let messageData = [
  {
    id: 1,
    avatar: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
    userName: 'Имя',
    date: '2020-09-15',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
  },
  {
    id: 2,
    avatar: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
    userName: 'Имя',
    date: '2020-09-15',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
  },
  {
    id: 3,
    avatar: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
    userName: 'Имя',
    date: '2020-09-15',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
  },
  {
    id: 4,
    avatar: 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png',
    userName: 'Имя',
    date: '2020-09-15',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed rerum dolore corrupti quo recusandae dolor quia ratione iure saepe, et, inventore blanditiis neque veritatis architecto dignissimos omnis quibusdam laudantium!',
  },
];

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <h2 className={classes.title}>Мои диалоги</h2>
      <ul className={classes.dialogsUsers}>
        <DialogsUser name={userData[0].name} id={userData[0].id} />
        <DialogsUser name={userData[1].name} id={userData[1].id} />
        <DialogsUser name={userData[2].name} id={userData[2].id} />
        <DialogsUser name={userData[3].name} id={userData[3].id} />
        <DialogsUser name={userData[4].name} id={userData[4].id} />
        <DialogsUser name={userData[5].name} id={userData[5].id} />
        <DialogsUser name={userData[6].name} id={userData[6].id} />
        <DialogsUser name={userData[7].name} id={userData[7].id} />
      </ul>
      <div className={classes.dialogsMessages}>
        <MessageContainer
          img={messageData[0].avatar}
          description='User Avatar'
          userName={messageData[0].userName}
          date={messageData[0].date}
          message={messageData[0].message}
        />
        <MessageContainer
          img={messageData[0].avatar}
          description='User Avatar'
          userName={messageData[0].userName}
          date={messageData[0].date}
          message={messageData[0].message}
        />
        <MessageContainer
          img={messageData[0].avatar}
          description='User Avatar'
          userName={messageData[0].userName}
          date={messageData[0].date}
          message={messageData[0].message}
        />
        <MessageContainer
          img={messageData[0].avatar}
          description='User Avatar'
          userName={messageData[0].userName}
          date={messageData[0].date}
          message={messageData[0].message}
        />
      </div>
    </div>
  );
};

export default Dialogs;
